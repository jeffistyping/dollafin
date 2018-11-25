import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    service: any;
    router: any;

    constructor(dataService: DataService, router: Router) {
        this.service = dataService;
        this.router = router;
    }

    onClick() {
        let s = $('form').serializeArray();
        this.service.DATA = s;
        this.router.navigate(['/game']);
    }

}

