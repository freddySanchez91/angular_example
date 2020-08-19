import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  {path:"" , redirectTo:"/list" , pathMatch:"full"},
  {path:"list" , component:UserListComponent},
  {path:"userDetail/:id" ,component:UserDetailComponent},
  {path:"newUser", component:NewUserFormComponent},
  {path:"updateUser/:id" , component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
