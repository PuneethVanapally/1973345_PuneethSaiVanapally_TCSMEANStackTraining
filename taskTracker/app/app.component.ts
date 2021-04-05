import { Component } from '@angular/core';

import { NgForm }  from '@angular/forms';


export interface ContactDetails {
  id: number;
  name: string;
  task: string;
  deadline: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent{
  
  details = [{id: ' ', name: ' ', task: ' ', deadline: ' '}];
 

  constructor() {
    
   }

  ngOnInit(): void {

    console.log(this.details)
  }

  clickMe(f: NgForm){
    console.log(f)

    this.details.push({
       id: f.controls.id.value,
       name: f.controls.name.value,
       task: f.controls.task.value,
       deadline: f.controls.deadline.value
    });
  }

}