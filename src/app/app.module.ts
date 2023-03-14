import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// custom made module
import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrdersModule,
    SiteFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
