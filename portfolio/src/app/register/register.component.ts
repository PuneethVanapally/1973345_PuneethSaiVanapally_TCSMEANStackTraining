import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName : string;
  passWord : string;

  constructor(private router : Router) {
    this.userName="";
    this.passWord="";
   }

  ngOnInit(): void {
  }

  clickMe(){
    console.log(this.userName);
    
    sessionStorage.setItem("username",this.userName);
    sessionStorage.setItem("password",this.passWord);

    this.router.navigate(["/"]);
    // window.location.href("/register");
  }

}
