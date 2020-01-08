import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WorldcountriesComponent } from './worldcountries/worldcountries.component';


const routes: Routes = [
 { path:"users" , component:UsersComponent
},
{
  path:"worldcountries" , component:WorldcountriesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
