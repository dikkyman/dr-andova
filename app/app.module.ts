import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PunchlineComponent } from './punchline/punchline.component';

//Case
import { CasesComponent } from './cases/cases.component'

//Team
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MartinaComponent } from './team/martina';
import { VericaComponent } from './team/verica';
import { NadicaComponent } from './team/nadica';
import { AngelaComponent } from './team/angela';

//Services
import { BelenjeComponent } from './services/belenje.component';
import { DetskaComponent } from './services/detska.component';
import { FacijalnaComponent } from './services/facijalna.component';
import { IntervenciiComponent } from './services/intervencii.component';
import { KorenovComponent } from './services/korenov.component';
import { KoronkiComponent } from './services/koronki.component';
import { LaminatiComponent } from './services/laminati.component';
import { MostoviComponent } from './services/mostovi.component';
import { ParadontologijaComponent } from './services/paradontologija.component';
import { ParcijalniComponent } from './services/parcijalni.component';
import { ServiceEachComponent } from './services/services.each.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: PunchlineComponent },
      { path: 'contact', component: FooterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'team', component: TeamComponent },
      { path: '', component: PunchlineComponent },
      //Team
      { path: 'martina', component: MartinaComponent },
      { path: 'verica', component: VericaComponent },
      { path: 'nadica', component: NadicaComponent },
      { path: 'angela', component: AngelaComponent },
      //Services
      { path: 'beleenje', component: BelenjeComponent },
      { path: 'detska', component: DetskaComponent },
      { path: 'facijalna', component: FacijalnaComponent },
      { path: 'intervencii', component: IntervenciiComponent },
      { path: 'korenov', component: KorenovComponent },
      { path: 'koronki', component: KoronkiComponent },
      { path: 'laminati', component: LaminatiComponent },
      { path: 'mostovi', component: MostoviComponent },
      { path: 'paradontologija', component: ParadontologijaComponent },
      { path: 'parcijalni', component: ParcijalniComponent },
      { path: 'plombi', component: ServiceEachComponent },
      { path: 'cases', component: CasesComponent },
    ])
     ],
  declarations: [ 
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PunchlineComponent,
    TeamComponent,
    AboutComponent,
    ServicesComponent,
    MartinaComponent,
    VericaComponent,
    NadicaComponent,
    AngelaComponent,
    BelenjeComponent,
    DetskaComponent,
    FacijalnaComponent,
    IntervenciiComponent,
    KorenovComponent,
    KoronkiComponent,
    LaminatiComponent,
    MostoviComponent,
    ParadontologijaComponent,
    ParcijalniComponent,
    ServiceEachComponent,
    CasesComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
