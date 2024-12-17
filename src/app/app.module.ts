import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/view/home/home.component';
import { ResultComponent } from './Result/view/result/result.component';
import { BusinessComponent } from './Business/view/business/business.component';
import { BankingComponent } from './Banking/view/banking/banking.component';
import { FormsModule } from '@angular/forms';
import { H2Component } from './H2/view/h2/h2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultComponent,
    BusinessComponent,
    BankingComponent,
    H2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
