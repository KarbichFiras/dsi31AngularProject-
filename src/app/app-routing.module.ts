import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { SearchFComponent } from "./search-f/search-f.component"
  const routes : Routes =[  
    {path :"searchForSpecificFood" , component: SearchFComponent },
    
    
  ];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
