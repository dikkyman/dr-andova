import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'an-team',
    templateUrl: 'app/team/team.component.html',
    styleUrls: ['app/team/team.component.css']
})
export class TeamComponent {
     constructor(private _route: ActivatedRoute,
                private _router: Router) { }

      goToAngela(): void {
        this._router.navigate(['/angela']);
    }

     goToMartina(): void {
        this._router.navigate(['/martina']);
    }

     goToVerica(): void {
        this._router.navigate(['/verica']);
    }

     goToNadica(): void {
        this._router.navigate(['/nadica']);
    }
}