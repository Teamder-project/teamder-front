import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-profile',
  templateUrl: './game-profile.component.html',
  styleUrls: ['./game-profile.component.css']
})
export class GameProfileComponent implements OnInit {

  @Input() gameProfile;
  constructor() { }

  ngOnInit(): void {
  }

  displayBtn(id: any): void {
   document.getElementById("button-div"+id).classList.remove("hide")
  }

  deleteBtn(id): void {
    document.getElementById("button-div"+id).classList.add("hide");
  }
}
