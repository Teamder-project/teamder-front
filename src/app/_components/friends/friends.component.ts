import { Component, Input, OnInit } from '@angular/core';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  @Input() friend;
  constructor(){
  }

  ngOnInit(): void {
  }

}
