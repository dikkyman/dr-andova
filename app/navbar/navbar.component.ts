import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'an-nav',
    templateUrl: 'app/navbar/navbar.component.html',
    styleUrls: ['app/navbar/navbar.component.css']
})
export class NavBarComponent{

 constructor(private _route: ActivatedRoute,
                private _router: Router) { }

    goToContact(): void {
            this._router.navigate(['contact']);
        }
}