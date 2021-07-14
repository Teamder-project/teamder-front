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
  private gamer: Gamer;
  private ws: WebSocket;

  friends : Gamer[];

  constructor(private gamerService: GamerService, private friendService : FriendService, private friendChatService: FriendChatService) { }

  ngOnInit(): void {
    this.connect();
    // Stock le profil du l'utilisateur connecté
    this.gamerService.getById(parseInt(localStorage.getItem("id"))).subscribe(data => {
      this.gamer = data;
    })
    // Récupère les amis et met le premier ami de la liste comme ami selectionné
    this.friendService.getById(localStorage.getItem("id")).subscribe(data => {
      this.friends = data;
      this.idFriend = this.friends[0].id;
      // Déclare les variables pour être appelées dans le setTimeout
      let idFriend = this.idFriend;
      let scrollBottom = this.scrollBottom;
      setTimeout(function(){
        document.getElementById(String(idFriend)).classList.remove("display-none");
        scrollBottom();
      }, 50);
      // Réupère et affiche les messages pour chaque amis
      this.friendChatService.getMessagesByGamer(localStorage.getItem("id")).subscribe(messages => {
        this.scrollBottom();
        messages.forEach(message => {
          this.showMessage(message);
        })
      })
    });
  }

  /**
   * Appelé par event click
   * Change l'utilisateur selectionné
   * @param id
   */
  clickFriends = (id) => {
    document.getElementById(String(this.idFriend)).classList.add("display-none");
    this.idFriend= id;
    document.getElementById(String(this.idFriend)).classList.remove("display-none");
    this.scrollBottom();
  }

  /**
   * Scroll en bas des messages
   */
  scrollBottom = () => {
    document.getElementById(String(this.idFriend)).scrollTop = document.getElementById(String(this.idFriend)).scrollHeight - document.getElementById(String(this.idFriend)).clientHeight;
  }

  /**
   * Initialisation WebSocket
   */
  connect = () => {
    this.ws = new WebSocket("ws://localhost:8080/chat/" + localStorage.getItem("id"));
    this.ws.onmessage = this.receive.bind(event);
  }

  /**
   * Sauvegarde le message en BDD et l'envoie à la WebSocket
   */
  send = () => {
    if(document.getElementById("input-message")['value'] != "") {
      let content = document.getElementById("input-message")['value'];
      document.getElementById("input-message")['value'] = "";
      let message : any = {
        "message": content,
        "sender": { "id": localStorage.getItem("id") },
        "receiver": { "id": this.idFriend }
      }
      this.friendChatService.create(message).subscribe(data=>{
        message = data;
        // envoie le message à la websocket en Json
        let json = JSON.stringify(message);
        this.ws.send(json);
      })
    }
    else{
      alert("rentre un message")
    }
  }

  /**
   * Appelé par la WebSocket lorsqu'un message est reçu, converti l'objet et l'affiche
   * @param event objet reçu de la WebSocket
   */
  receive = (event) => {
    this.showMessage(JSON.parse(event.data));
  }

  /**
   * Affiche le message
   * @param message message a afficher
   */
  showMessage = (message: FriendChat) => {
    
    if(message.sender.id == Number(localStorage.getItem("id"))){
      document.getElementById(String(message.receiver.id)).innerHTML += 
      // Remplacer par une balise contenant le message envoyé par l'utilisateur connecté
      "<p class=envoyeur style=\"align-self: flex-end; text-align:right; background-color:white; margin-right:20px; font-size:20px; opacity:0.2; padding:10px; color:black; width:40%;\">"+ message.message + "</p>";
    }
    else{
      document.getElementById(String(message.sender.id)).innerHTML += 
        // Remplacer par une balise contenant le message envoyé par l'ami
        "<p class=receveur style=\" background-color:white; opacity:0.2; margin-left:20px; font-size:20px; color:black; width:40%; padding:10px;\">"+ message.message + "</p>"
    }
    this.scrollBottom();
  }
}