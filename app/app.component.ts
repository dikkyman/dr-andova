import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <an-nav></an-nav>
        <router-outlet></router-outlet>
        <an-foot [hidden]="ftr"></an-foot>
    </div>
    `
})
export class AppComponent implements OnInit{
    pageTitle: string=`Acme Product Management`;

 constructor(private router: Router) { }

    public ftr : boolean = false;

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.ftr = false;
            document.body.scrollTop = 0;
            if(this.router.url.endsWith("/contact")){
                console.log("hi");
                this.ftr = true;
            }
        });
    }

}