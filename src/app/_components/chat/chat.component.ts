import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from 'src/app/models/chatMessageDto';
import { Gamer } from 'src/app/models/Gamer';
import { GamerService } from 'src/app/services/gamer.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  private sender : Gamer;
  private receiver : Gamer;

  friends = [
    {pseudo: "toto", avatar:"default-img.jpg"},
    {pseudo: "titi", avatar:"default-img.jpg"}
  ];

  constructor(public webSocketService: WebSocketService, private gamerService: GamerService) { }
  
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
    this.gamerService.getById(localStorage.getItem("id")).subscribe(data => {
      this.sender = data;
    });
    this.gamerService.getById("5").subscribe(data => {
      this.receiver = data;
    });
    
  }
  
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }
  
  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.message, this.sender, this.receiver);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
  }

}
