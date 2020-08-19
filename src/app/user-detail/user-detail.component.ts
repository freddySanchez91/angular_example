import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user : UserModel; 

  isEditing:boolean;

  constructor(    
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit() {
    let id = + this.activatedRoute.snapshot.paramMap.get("id");
    this.userService.getUserById(id.toString(), user =>{
      this.user = user;
    }, error => {
        alert("Error");
    })
    alert("mostrando el elemento " + id);
  }

  edit(){
    this.isEditing =  true;
  }

  update(){
    this.userService.updateUser(
      this.user,
      ()=>{
        this.route.navigateByUrl("/list");
      },error =>{
        alert("Usuario no actualizado")
      }      
    );
  }
}
