import { NgModule, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule
  ],
  providers:  [ { provide: LOCALE_ID, useValue: 'es-MX' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
