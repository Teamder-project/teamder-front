import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GameProfile } from 'src/app/models/GameProfile';
import { GameProfileService } from 'src/app/services/game-profile.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  profile : GameProfile
  updatedProfile : FormGroup;
  constructor(private http : HttpClient, private service : GameService, private route : ActivatedRoute, private serviceProfile : GameProfileService, private fb: FormBuilder, private router: Router) {
    this.updatedProfile = this.fb.group({
      id: 0,
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

    this.route.paramMap.subscribe(url => {
      let id : number = Number(url.get("id"));
      this.serviceProfile.getProfileById(id).subscribe(profile => {
        this.profile = profile
        this.updatedProfile = this.fb.group({
          id: this.profile.id,
          nickname_game: this.profile.nickname_game,
          goals: this.profile.goals,
          description: this.profile.description,
          gamer : {
            id: 2
          },
          game : this.fb.group({
            id: this.profile.game.id
          })
        })
      })
    })
    
  }

  editProfile = () => {

    this.serviceProfile.updateProfile(this.updatedProfile.value).subscribe(profile => {
      this.router.navigateByUrl("index");
    })
  }
}
