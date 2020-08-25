
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteStr:string
  quotePublisher:string
  quoteAuthor:string
  theQuote:any

  submitQuote(  ){
    this.theQuote= new Quotes(this.quotePublisher,this.quoteAuthor,this.quoteStr)
    this.quoteStr=''
    this.quoteAuthor=''
    this.quotePublisher=''
    this.emitQuote.emit(this.theQuote)
  }




  constructor() { }

  ngOnInit() {
  }

}