import { Component, OnInit } from '@angular/core';
import newThingsData from "../data/newThings.json";

interface newThing {
  areaId: Number;
  sku: String;
  defaultSku: String;
}



@Component({
  selector: 'app-new-things-list',
  templateUrl: './new-things-list.component.html',
  styleUrls: ['./new-things-list.component.css']
})
export class NewThingsListComponent implements OnInit {
  

  constructor() { }

  newThings: newThing[] = newThingsData;

  ngOnInit(): void {
  }
  
}


console.log(newThingsData)
