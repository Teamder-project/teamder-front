import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameProfile } from 'src/app/models/GameProfile';
import { GameProfileService } from 'src/app/services/game-profile.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  games : Game[] = [];
  gamerProfileForm : FormGroup;

  constructor(private service : GameService, private serviceProfile : GameProfileService, private fb: FormBuilder, private router: Router) {
    this.gamerProfileForm = this.fb.group({
      nickname_game: '',
      goals: '',
      description: '',
      gamer: {
        id: 2
      },
      game: this.fb.group({
        id: 0
      })
    })
  }

  ngOnInit(): void {
    this.service.getAllGames().subscribe(data => {
      this.games = data;
    })
  }

  createProfile = () => {
    console.log(this.gamerProfileForm.value.game);
    this.gamerProfileForm.value.game.id = parseInt(this.gamerProfileForm.value.game.id);
    this.serviceProfile.createProfile(this.gamerProfileForm.value);
  }
}
