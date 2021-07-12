import { Component, OnDestroy, OnInit } from '@angular/core';

import { FriendChat } from 'src/app/models/FriendChat';
import { Gamer } from 'src/app/models/Gamer';
import { FriendChatService } from 'src/app/services/friend-chat.service';
import { FriendService } from 'src/app/services/friend.service';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private idFriend: number;
  private receiver: Gamer;
  private ws: WebSocket;

  friends : Gamer[];

  constructor(private gamerService: GamerService, private friendService : FriendService, private friendChatService: FriendChatService) { }

  ngOnInit(): void {
    this.connect();
    this.friendService.getAll(Number(localStorage.getItem("id"))).subscribe(data => {
      this.friends = data;
      console.log(this.friends);
    });  
  }

  connect = () => {
    this.ws = new WebSocket("ws://localhost:8080/chat/" + localStorage.getItem("id"));

    this.ws.onmessage = this.receive.bind(event);
  }

  send = () => {
    let content = document.getElementById("input-message")['value'];
    let message : any = {
      "message": content,
      "sender": { "id": localStorage.getItem("id") },
      "receiver": { "id": this.idFriend }
    }
    this.friendChatService.create(message).subscribe(data=>{
      message = data;
    })
    // envoie le message à la websocket en Json
    let json = JSON.stringify(message);
    this.ws.send(json);
  }

  receive = (event) => {
    let friendchat: FriendChat = JSON.parse(event.data);
    console.log(friendchat.message)
  }
  clickFriends = (id) => {
   this.idFriend= id;
  }
}
