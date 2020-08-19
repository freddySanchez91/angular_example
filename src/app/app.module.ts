import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { NewUserFormComponent } from './new-user-form/new-user-form.component'
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UpdateUserComponent } from './update-user/update-user.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewUserFormComponent,
    UserListComponent,
    UserDetailComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
