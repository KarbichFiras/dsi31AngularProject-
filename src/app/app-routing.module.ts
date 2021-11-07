import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import {PaymentsComponent } from "./payments/payments.component";
import {AddfoodComponent} from "./addfood/addfood.component";
  const routes : Routes =[  
    {path :"payments" , component : PaymentsComponent },
    {path :"addfood" , component : AddfoodComponent },
  ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
