import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  constructor(private loginService:LoginService,private location:Location) { }

  clase=true;

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    if (this.location.path()=="/carrito-compras"){
      this.clase=false;
      console.log("asd")
    }

  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
