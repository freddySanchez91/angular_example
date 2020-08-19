import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { unsupported } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  private httpClient : HttpClient 
  
  isLoading:boolean = true;

  constructor( httpClient : HttpClient
  ) { 
    this.httpClient=httpClient;
  }

  getUsers(
    success:( users: UserModel[] ) => void,
    error: (messge: string) => void
    ): void{

      var myHeaders = {
        "Content-Type":"application/json",
        "Access-Control-Allow-Methods":"GET, POST, DELETE, PUT"
      }
      
      this.httpClient.get(
        "http://localhost:8080/rest/user/" , 
        {headers : myHeaders}
      ).subscribe(
        (data) => {
          var users: UserModel[];
          this.isLoading = false;
          //Parseo
          users = data as UserModel[];

          success(users);
        }, error =>{
            error("Error al consultar los usuarios");
        }, ()=>{
            console.log("Termian consumo de web services");
        }
      )
    }
  

  registerUser(user: UserModel){
    //Registrar un usuario por web service
    
    var headers = {
      "Content-Type":"application/json",
      "Access-Control-Allow-Methods":"GET, POST, DELETE, PUT"
    }
   
    this.httpClient.post(
      "http://127.0.0.1:8080/rest/user" ,
      user,
      {headers:headers}

      ).subscribe(
        data => {
          //Caso de exito
          var  registered = data as UserModel;

          
        },
        error=>{
          //Caso de error
          alert("Usuario no registrado");
        }
      );    
  }

  getUserById(
    id:string,
    success:(user:UserModel)=>void,
    error:(error:string)=>void
  ){
    let headers={
      "Content-Type": "application/json"
    }
    let url = "http://127.0.0.1:8080/rest/user/"+ id;
    this.httpClient.get(
      url, 
      {headers:headers} ).subscribe(
        data => {
          let user = data as UserModel; //se ocupa para hacer casting 
          success(user);
        },
        err=>{
          error("Usuario no encontrado");
        }
      )
  }

  deleteUserById(
    id:string,
    success:()=>void,
    error:(error:string)=>void
  ){
    let headers={
      "Content-Type": "application/json"
    }
    let url = "http://127.0.0.1:8080/rest/user/"+ id;
    this.httpClient.delete(
      url, 
      {headers:headers} ).subscribe(
        data => {
          let result = data as boolean; //se ocupa para hacer casting 
          if(result){ 
            success();
        }
        },
        err=>{
          error("Usuario no encontrado");
        }
      )
  }

  updateUser(user: UserModel , 
      success: () => void,
      error:(mensaje)=>void
    ){
    //Registrar un usuario por web service
    
    var headers = {
      "Content-Type":"application/json",
      "Access-Control-Allow-Methods":"GET, POST, DELETE, PUT"
    }
   
    this.httpClient.put(
      "http://127.0.0.1:8080/rest/user" ,
      user,
      {headers:headers}

      ).subscribe(
        data => {
          //Caso de exito
          var  registered = data as UserModel;          
          success();
        },
        error=>{
          error("No se pudo actualizar el usuario");
          
        }
      );    
  }

}
