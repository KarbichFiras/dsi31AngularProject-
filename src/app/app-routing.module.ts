import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

  const routes : Routes =[  
    //{path :"/consulterPanier" , component: consulterPanier },
    //{path :"/consulterPanier" , component: consulterPanier },
    
  ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
