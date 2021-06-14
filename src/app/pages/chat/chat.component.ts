import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ChatAdapter, IChatParticipant, ParticipantResponse } from 'ng-chat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'chat';
  //Id of the chat user
  userId = 666;

  private listFriends(): Observable<ParticipantResponse[]>;
    
  private getMessageHistory(destinataryId: any): Observable<Message[]>;

  private sendMessage(message: Message): void;

  private onMessageReceived(participant: IChatParticipant, message: Message): void;

  private onFriendsListChanged(participantsResponse: ParticipantResponse[]): void;

}
