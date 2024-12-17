import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/view/home/home.component';
import { ResultComponent } from './Result/view/result/result.component';
import { H2Component } from './H2/view/h2/h2.component';
import { BankingComponent } from './Banking/view/banking/banking.component';
import { BusinessComponent } from './Business/view/business/business.component';


const routes: Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"",
        redirectTo:'/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path: "result",
    component:ResultComponent
  },
  {
    path: "h2",
    component:H2Component
  },
  {
    path: "banking",
    component:BankingComponent
  },
  {
    path: "business",
    component:BusinessComponent
  }


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
