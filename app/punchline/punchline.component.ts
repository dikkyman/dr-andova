import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'an-punch',
    templateUrl: 'app/punchline/punchline.component.html',
    styleUrls: ['app/punchline/punchline.component.css']
})
export class PunchlineComponent {

    constructor(private _route: ActivatedRoute,
                private _router: Router) { }

      goToAbout(): void {
        this._router.navigate(['/about']);
    }
}