import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MarketPlaceComponent } from './components/market-place/market-place.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { PlanComponent } from './components/plan/plan.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PlansComponent } from './components/plans/plans.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { SalesHistoryComponent } from './components/sales-history/sales-history.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MakeSalesComponent } from './components/make-sales/make-sales.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    MarketPlaceComponent,
    ContactUsComponent,
    NewsFeedComponent,
    ProductDetailsComponent,
    DashboardComponent,
    PaymentPageComponent,
    PlanComponent,
    ViewCartComponent,
    PaymentDetailsComponent,
    PlansComponent,
    PurchaseHistoryComponent,
    ProductStoreComponent,
    SalesHistoryComponent,
    NotificationComponent,
    MakeSalesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwlModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
