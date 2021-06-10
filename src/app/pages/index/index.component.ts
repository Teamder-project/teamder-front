import { Component, OnInit } from '@angular/core';
import { GameProfile } from 'src/app/models/GameProfile';
import { GameProfileService } from 'src/app/services/game-profile.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  gameProfiles : GameProfile[] = [];

  constructor(private service : GameProfileService) { }

  /**
   * Récupération de l'id d'un gamer pour récuperer tout les profils lier à celui ci
   */
  ngOnInit(): void {
    this.service.getProfilesByGamerId(2).subscribe(data => {
      this.gameProfiles = data;
    })
  }



}
