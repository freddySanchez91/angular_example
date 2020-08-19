import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent implements OnInit {

  user : UserModel = new UserModel();

  constructor(
    private userService : UserService) { 
    
    this.user.name = "Freddy"
    this.user.lastName = "Sanchez"
    this.user.surname = "Angeles"
    this.user.age = 27 
  }

  ngOnInit() {
  }

  performClickAction(){
    //Registrar el usuario por medio de ws    
    this.userService.registerUser(this.user);


  }

}
