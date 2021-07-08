import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FriendChat } from 'src/app/models/FriendChat';
import { Gamer } from 'src/app/models/Gamer';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private sender: Gamer;
  private receiver: Gamer;
  private ws: WebSocket;

  friends = [
    { pseudo: "toto", avatar: "default-img.jpg" },
    { pseudo: "titi", avatar: "default-img.jpg" }
  ];

  constructor(private gamerService: GamerService) { }

  ngOnInit(): void {
    this.connect();
  }

  connect = () => {
    this.ws = new WebSocket("ws://localhost:8080/chat/1");

    this.ws.onmessage = function (event) {
      console.log(event)
    };
  }

  send = () => {
    let content = document.getElementById("input-message")['value'];
    let json = JSON.stringify({

      "message": content,
      "sender": { "id": 1 },
      "reveiver": { "id": 2 }
    });

    this.ws.send(json);
  }
}
