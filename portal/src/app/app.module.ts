import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryDataService } from './services/in-memory-data.service';



import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { OffersComponent } from './components/offers/offers.component';
import { ShopComponent } from './components/shop/shop.component';
import { ButtonComponent } from './components/button/button.component';
import { ShopMenuComponent } from './components/menunfooter/shop-menu/shop-menu.component';
import { MenComponent } from './components/gender/men/men.component';
import { WomenComponent } from './components/gender/women/women.component';
import { KidsComponent } from './components/gender/kids/kids.component';
import { CartcounterComponent } from './components/cart/cartcounter/cartcounter.component';
import { ShopBodyComponent } from './components/shop-body/shop-body.component';
import { ItemsComponent } from './components/items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopFooterComponent } from './components/menunfooter/shop-footer/shop-footer.component';
import { CartComponent } from './components/cart/cart/cart.component';
import {NgOptimizedImage} from "@angular/common";


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'button', component: ButtonComponent },
  { path : 'men', component: MenComponent },
  { path : 'women', component: WomenComponent },
  { path : 'kids', component: KidsComponent },
  { path : 'cart', component: CartComponent },
  { path : 'shopbody', component: ShopBodyComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    OffersComponent,
    ShopComponent,
    ButtonComponent,
    ShopMenuComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    CartcounterComponent,
    ShopBodyComponent,
    ItemsComponent,
    ShopFooterComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        MatIconModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
