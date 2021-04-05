import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portf',
  templateUrl: './portf.component.html',
  styleUrls: ['./portf.component.css']
})
export class PortfComponent implements OnInit {
  

  details = [{contact:'123', number: '123'}];

  constructor() {
    
   }

  ngOnInit(): void {
  }

  clickMe(){
    
  }

}
