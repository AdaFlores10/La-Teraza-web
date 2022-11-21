import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user:Usuario = new Usuario()
  
  constructor(private router:Router,private loginService:LoginService ) { }
  username:String
  password:String

  ngOnInit(): void {
  }
  onSubmit(){
    this.loginService.generaToken(this.username,this.password)
    .subscribe(data=>{
      if(data==1){
        localStorage.setItem("user",this.username.toString()); 
        window.location.href="validation";
      }
      
    }
      )

}

}