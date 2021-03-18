import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MarketPlaceComponent } from './components/market-place/market-place.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { ViewCartComponent } from './components/view-cart/view-cart.component';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { SalesHistoryComponent } from './components/sales-history/sales-history.component';
import { ProductStoreComponent } from './components/product-store/product-store.component'; 
import { NotificationComponent } from './components/notification/notification.component';
import { MakeSalesComponent } from './components/make-sales/make-sales.component'



const routes: Routes = [
  {   path: '', 
      component: HomeComponent 
  },
  {   path: 'sign-in', 
      component: SignInComponent 
  },
  {   path: 'sign-up', 
      component: SignUpComponent 
  },
  {   path: 'market-place', 
      component: MarketPlaceComponent 
  },
  {   path: 'contact', 
      component: ContactUsComponent 
  },
  {   path: 'news-feed', 
      component: NewsFeedComponent
  },
  {   path: 'product-details', 
      component: ProductDetailsComponent 
  },
  {   path: 'dashboard', 
      component: DashboardComponent
  },
  {   path: 'payment', 
      component: PaymentPageComponent
  },
  {   path: 'viewcart', 
      component: ViewCartComponent
  },
  {   path: 'payment-details', 
      component: PaymentDetailsComponent
  },
  {   path: 'purchase-history', 
      component: PurchaseHistoryComponent
  },
  {   path: 'sales-history', 
      component: SalesHistoryComponent
  },
  {   path: 'product-in-store', 
      component: ProductStoreComponent
  },
  {   path: 'notification', 
      component: NotificationComponent 
  },
  {   path: 'make-sales', 
      component: MakeSalesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
