"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var footer_component_1 = require('./footer/footer.component');
var punchline_component_1 = require('./punchline/punchline.component');
//Case
var cases_component_1 = require('./cases/cases.component');
//Team
var team_component_1 = require('./team/team.component');
var about_component_1 = require('./about/about.component');
var services_component_1 = require('./services/services.component');
var martina_1 = require('./team/martina');
var verica_1 = require('./team/verica');
var nadica_1 = require('./team/nadica');
var angela_1 = require('./team/angela');
//Services
var belenje_component_1 = require('./services/belenje.component');
var detska_component_1 = require('./services/detska.component');
var facijalna_component_1 = require('./services/facijalna.component');
var intervencii_component_1 = require('./services/intervencii.component');
var korenov_component_1 = require('./services/korenov.component');
var koronki_component_1 = require('./services/koronki.component');
var laminati_component_1 = require('./services/laminati.component');
var mostovi_component_1 = require('./services/mostovi.component');
var paradontologija_component_1 = require('./services/paradontologija.component');
var parcijalni_component_1 = require('./services/parcijalni.component');
var services_each_component_1 = require('./services/services.each.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: punchline_component_1.PunchlineComponent },
                    { path: 'contact', component: footer_component_1.FooterComponent },
                    { path: 'about', component: about_component_1.AboutComponent },
                    { path: 'services', component: services_component_1.ServicesComponent },
                    { path: 'team', component: team_component_1.TeamComponent },
                    { path: '', component: punchline_component_1.PunchlineComponent },
                    //Team
                    { path: 'martina', component: martina_1.MartinaComponent },
                    { path: 'verica', component: verica_1.VericaComponent },
                    { path: 'nadica', component: nadica_1.NadicaComponent },
                    { path: 'angela', component: angela_1.AngelaComponent },
                    //Services
                    { path: 'beleenje', component: belenje_component_1.BelenjeComponent },
                    { path: 'detska', component: detska_component_1.DetskaComponent },
                    { path: 'facijalna', component: facijalna_component_1.FacijalnaComponent },
                    { path: 'intervencii', component: intervencii_component_1.IntervenciiComponent },
                    { path: 'korenov', component: korenov_component_1.KorenovComponent },
                    { path: 'koronki', component: koronki_component_1.KoronkiComponent },
                    { path: 'laminati', component: laminati_component_1.LaminatiComponent },
                    { path: 'mostovi', component: mostovi_component_1.MostoviComponent },
                    { path: 'paradontologija', component: paradontologija_component_1.ParadontologijaComponent },
                    { path: 'parcijalni', component: parcijalni_component_1.ParcijalniComponent },
                    { path: 'plombi', component: services_each_component_1.ServiceEachComponent },
                    { path: 'cases', component: cases_component_1.CasesComponent },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavBarComponent,
                footer_component_1.FooterComponent,
                punchline_component_1.PunchlineComponent,
                team_component_1.TeamComponent,
                about_component_1.AboutComponent,
                services_component_1.ServicesComponent,
                martina_1.MartinaComponent,
                verica_1.VericaComponent,
                nadica_1.NadicaComponent,
                angela_1.AngelaComponent,
                belenje_component_1.BelenjeComponent,
                detska_component_1.DetskaComponent,
                facijalna_component_1.FacijalnaComponent,
                intervencii_component_1.IntervenciiComponent,
                korenov_component_1.KorenovComponent,
                koronki_component_1.KoronkiComponent,
                laminati_component_1.LaminatiComponent,
                mostovi_component_1.MostoviComponent,
                paradontologija_component_1.ParadontologijaComponent,
                parcijalni_component_1.ParcijalniComponent,
                services_each_component_1.ServiceEachComponent,
                cases_component_1.CasesComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map