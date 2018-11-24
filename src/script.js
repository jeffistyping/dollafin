// Our labels along the x-axis
export function draw() {
  var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, ""];
  // For drawing the lines

  var NetBalance = [
    20, 30, 60, 80, 65
    , 43, 80, 110, 130, 142
    , 150, 180, 210, 160, 180
    , 211, 312, 325, 360, 391,
    412, 423, 444, 234, 12,
    30, 70, 120
  ];

  var moneySpent = [
    20, 10, 30, 20, -15,
    -12, 37, 30, 20, 12,
    8, 30, 30, -50, 20,
    31, 101, 13, 35, 31,
    21, 11, 21, -210, -222,
    18, 40, 50
  ];

  var itemBought = [
    "", "", "", "", "Bubble Tea",
    "Chipotle", "", "", "", "",
    "", "", "", "Textbook", "",
    "", "", "", "", "",
    "", "", "", "Shoes", "Hoodie",
    "", "", ""
  ];

  var itemCategory = [
    "", "", "", "", "Foods",
    "Food", "", "", "", "",
    "", "", "", "School", "",
    "", "", "", "", "",
    "", "", "", "Clothing", "Clothings",
    "", "", ""
  ];

  var items = [];
  var itemsValue = [];
  var hidden = [];

  for (let i = 0; i < days.length; i++) {
    if (moneySpent[i + 1] < 0) {
      if (!items.includes(itemCategory[i + 1])) {
        items.push(itemCategory[i + 1]);
        itemsValue.push(moneySpent[i + 1] * -1);
      } else {
        itemsValue[items.indexOf(itemCategory[i + 1])] += moneySpent[i + 1] * -1;
      }
    }
  }

  var ctx = document.getElementById("purchaseChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [
        {
          data: NetBalance,
          label: "Net Balance",
          borderColor: "#EBBB32",
          backgroundColor: "#EBBB32",
          fill: false
        }
      ],
    },

    options: {
      title: {
        display: true,
        text: "Net balance growth in a Month"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Net Balance ($)"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Day of the Month"
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
            return context.hovered ? { weight: 'bold', size: 11 } : { weight: 'bold', size: 10 };
          },
          anchor: "top",
          align: "340",
          offset: "5",
          formatter: function (value, context) {
            if (moneySpent[context.dataIndex + 1] < 0) {
              return context.hovered ? itemBought[context.dataIndex + 1] : "$" + moneySpent[context.dataIndex + 1];
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
    }
    else {
      hidden.push(legendItem.text);
    }
    original.call(this, e, legendItem);
    updateText(doughnutty);
  };

  function updateText(chart) {
    chart.options.elements.center.text = getSum();
    chart.update();
  }

  let getSum = function () {
    let sum = 0;
    for (let i = 0; i < itemsValue.length; i++) {
      if (!hidden.includes(items[i])) {
        sum += itemsValue[i];
      }
    }
    return "$" + sum;
  }

  var doughnutty = new Chart(document.getElementById("categoryDoughnut"), {
    type: 'doughnut',
    data: {
      labels: items,
      datasets: [
        {
          label: "Purchases by category ($)",
          //"#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
          backgroundColor: ["#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d", "#87838e", "#afacb3", "#c9c8cc"],
          data: itemsValue
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Purchases by category ($)'
      },
      plugins: {
        datalabels: {
          color: 'black',
          anchor: "top",
          align: "center",
          offset: "2",
          formatter: function (value) {
            return "$" + value;
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