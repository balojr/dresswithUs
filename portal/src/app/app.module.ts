import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { OffersComponent } from './components/offers/offers.component';


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'offers', component: OffersComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
