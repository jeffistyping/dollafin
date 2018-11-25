var days = [];
// For drawing the lines

var NetBalance = [];
var NetIncome = [];
var moneySpent = [];

var itemBought = [];

var itemCategory = [];

var items = [];
var itemsValue = [];
var hidden = [];

var doughnutty;
var lineChart;

let day = 0;

function updateText(chart) {
  chart.options.elements.center.text = getSum();
  chart.update();
}

function updateLine(chart) {
  chart.update();
}

let getSum = function () {
  let sum = 0;
  for (let i = 0; i < itemsValue.length; i++) {
    if (!hidden.includes(items[i])) {
      sum += parseFloat(itemsValue[i].toFixed(2));
    }
  }
  console.log(items);
  return '$' + parseFloat(sum.toFixed(2));
}

export function gainMoney(balance, clicks, name, salary) {
  day += 1;
  days.push(day);
  NetIncome.push(clicks*salary);
  itemBought.push(name);
  NetBalance.push(balance);
  updateLine(lineChart);
}

export function buy(cost, category) {
  let c = category.trim();
  let i = items.indexOf(c);
  if (i == -1) {
    items.push(c)
    itemsValue.push(parseFloat(cost.toFixed(2)));
  } else {
    itemsValue[i] = parseFloat((itemsValue[i] + cost).toFixed(2));
  }

  updateText(doughnutty);
}

// Our labels along the x-axis
export function draw() {

  for (let i = 0; i < days.length; i++) {
    if (moneySpent[i + 1] < 0) {
      if (!items.includes(itemCategory[i + 1])) {
        items.push(itemCategory[i + 1]);
        itemsValue.push(parseFloat(moneySpent[i + 1] * -1).toFixed(2));
      } else {
        itemsValue[items.indexOf(itemCategory[i + 1])] = (itemsValue[items.indexOf(itemCategory[i + 1])] + (moneySpent[i + 1] * -1)).toFixed(2);
      }
    }
  }

  var ctx = document.getElementById("purchaseChart");
  lineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
          data: NetBalance,
          label: "Net Balance",
          borderColor: "#EBBB32",
          backgroundColor: "#EBBB32",
          fill: false,
          lineTension: 0.2
        },
        {
          data: NetIncome,
          label: "Net Income",
          borderColor: "#0fa91b",
          backgroundColor: "#0fa91b",
          fill: false
        }
      ],
    },

    options: {
      title: {
        display: true,
        text: "Net Balance Growth in a Month"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Net Balance ($)"
          }
        }],
        xAxes: [{
          ticks:{
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: "Day"
          }
        }]
      },
      plugins: {
        datalabels: {
          color: 'black',
          color: function (context) {
            // Change the label text color based on our new `hovered` context value.
            return context.hovered ? "blue" : "black";
          },
          font: function (context) {
            // Change the label text color based on our new `hovered` context value.
            return context.hovered ? {
              weight: 'bold',
              size: 14
            } : {
              weight: 'bold',
              size: 14
            };
          },
          anchor: "end",
          align: "90",
          offset: function (context) {
            if (context.dataIndex % 2) {
              return "0"
            }
            return "6";
          },
          formatter: function (value, context) {
            if ((NetBalance[context.dataIndex + 1] - NetBalance[context.dataIndex]) < 0 && context.dataset.label == "Net Balance") {
              return context.hovered ? itemBought[context.dataIndex + 1] : "$" + parseFloat((NetBalance[context.dataIndex + 1] - NetBalance[context.dataIndex]).toFixed(2));
            }
            return null;
          },
          listeners: {
            enter: function (context) {

              context.hovered = true;
              return true;
            },
            leave: function (context) {
              // Receives `leave` events for any labels of any dataset.
              context.hovered = false;
              return true;
            }
          }
        }
      }
    }
  });

  var draw = {
    beforeDraw: function (chart) {
      if (chart.config.options.elements.center) {
        var ctx = chart.chart.ctx;

        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'Arial';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
        ctx.font = "30px " + fontStyle;

        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);

        var fontSizeToUse = Math.min(newFontSize, elementHeight);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse + "px " + fontStyle;
        ctx.fillStyle = color;

        ctx.fillText(txt, centerX, centerY);
      }
    }
  };

  Chart.pluginService.register(draw);

  var original = Chart.defaults.doughnut.legend.onClick;
  Chart.defaults.doughnut.legend.onClick = function (e, legendItem) {
    if (hidden.includes(legendItem.text)) {
      hidden.splice(hidden.indexOf(legendItem.text));
    } else {
      hidden.push(legendItem.text);
    }
    original.call(this, e, legendItem);
    updateText(doughnutty);
  };

  doughnutty = new Chart(document.getElementById("categoryDoughnut"), {
    type: 'doughnut',
    data: {
      labels: items,
      datasets: [{
        label: "Purchases by Category ($)",
        //"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
        backgroundColor: ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#87838e", "#afacb3", "#c9c8cc"],
        data: itemsValue
      }]
    },
    options: {
      legend: {
        position: "bottom"
      },
      title: {
        display: true,
        text: 'Purchases by Category ($)'
      },
      plugins: {
        datalabels: {
          color: 'black',
          anchor: "center",
          align: "center",
          offset: "1",
          font: {
            size: 13
          },
          formatter: function (value) {
            return value;
          }
        }
      },
      elements: {
        center: {
          text: getSum(),
          color: '#FF6384', // Default is #000000
          fontStyle: 'Arial', // Default is Arial
          sidePadding: 34 // Defualt is 20 (as a percentage)
        }
      }
    }
  });
};