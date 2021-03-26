import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  nameInp: any;
  passInp: any;

  nameVal: any;
  passVal: any;

  clickMe(){
    console.log(this.nameInp);


     this.nameVal = sessionStorage.getItem("username");
     this.passVal = sessionStorage.getItem("password");

     if(this.nameVal === this.nameInp && this.passVal === this.passInp){
        this.router.navigate(["/myportfolio"]);
     }
  }

  Nav(){
    this.router.navigate(["/register"]);
  }
  
  

    
  

  constructor(private router : Router) {
    // this.nameInp = "";
    // this.passInp = "";
    
   }

  ngOnInit(): void {
  }

  

   }

