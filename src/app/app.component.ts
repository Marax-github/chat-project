import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  messages: string[] = [];
  enterMessage!: string;

  addNewMessage(){

    this.enterMessage.trim() && this.messages.push(this.enterMessage.trim());

  }
 

}

