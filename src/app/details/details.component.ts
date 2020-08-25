import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes"
import {Input} from "@angular/core"
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quotes
  constructor() { }

  ngOnInit(): void {
  }

}
