import { Component, OnInit } from '@angular/core';

export interface ContactDetails {
  name: string;
  phone: number;
}


@Component({
  selector: 'app-portf',
  templateUrl: './portf.component.html',
  styleUrls: ['./portf.component.css']
})
export class PortfComponent implements OnInit {
  

  contact : any;
  number : any;

  contact1 : any;
  number1: any;

  constructor() {
    
   }

  ngOnInit(): void {
  }

  clickMe(){
   this.contact1= this.contact;
   this.number1=this.number;
    
  }

}
