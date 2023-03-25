import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { OffersComponent } from './components/offers/offers.component';
import { ShopComponent } from './components/shop/shop.component';
import { ButtonComponent } from './components/button/button.component';
import { ShopMenuComponent } from './components/menunfooter/shop-menu/shop-menu.component';


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'button', component: ButtonComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    OffersComponent,
    ShopComponent,
    ButtonComponent,
    ShopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
