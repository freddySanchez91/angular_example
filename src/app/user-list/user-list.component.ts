import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //Instancia local
  private userService: UserService;
  //imagenUser: string = "assets/images/img_avatar.png";
  users: UserModel[];

  constructor(
    userService: UserService
  ) { 
    //Asignamos la instancia del servicio
    this.userService = userService;
  }

  ngOnInit() {

    this.userService.getUsers( 
      users => {
        this.users = users;
      },
      error =>{
        alert(error);
      }
     );
  }

delete(user:UserModel){
    this.userService.deleteUserById(""+user.id,
    () => {
      this.ngOnInit();
    },
    error => {
      alert(error);
    }
  )
}

}
