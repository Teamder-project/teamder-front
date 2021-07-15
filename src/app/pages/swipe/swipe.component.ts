import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { GameProfile } from 'src/app/models/GameProfile';
import { Swipe } from 'src/app/models/Swipe';
import { GameProfileService } from 'src/app/services/game-profile.service';
import { GameService } from 'src/app/services/game.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {
  
  alias: string;
  
  swiper: GameProfile;

  users: GameProfile[] = [];

  constructor(private gameService: GameService, private service: GameProfileService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(url => {
      let id: number = Number(url.get("id"));
      this.service.getProfileById(id).subscribe(profileSwiper => {
        this.swiper = profileSwiper;
      })
    })
    this.getBackground();
    this.getProfiles();

    const swiper = new Swiper('.swiper-container', {
      //permet de mettre en place l'effet flip de la carte. Pour modifier la vitesse à laquelle elle se tourne, jouer avec les valeurs du speed.
      effect: 'flip',
      grabCursor: true,
      flipEffect: {
        slideShadows: false,

      },
      speed: 600,
      spaceBetween: 100,
      initialSlide: 1,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
      },
      //empêche de swipe les slides avec la classe "no-swiping"
      noSwiping: true,
      noSwipingClass: 'no-swiping'
    });

    swiper.on('reachBeginning', this.swipe.bind(this, 1));
    swiper.on('reachEnd', this.swipe.bind(this, 0));
  }

  getBackground = () => {
    this.route.paramMap.subscribe(url => {
      let id: number = Number(url.get("id"));
      this.service.getProfileById(id).subscribe(data => {
        this.alias = data.game.alias;
      })
    })
  }

  trigerFullScreen = () => {

    let fullscreen = document.querySelector("#fullscreen");
    let button = document.querySelector("#button");

    if (!document.fullscreenElement) {
      fullscreen?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  swipe = (state: number) => {
    let swipe : Swipe = new Swipe(state, this.swiper, this.users.splice(0, 1)[0]);
    
    this.service.swipe(swipe).subscribe(element =>{
      if(this.users.length == 2) {
        this.getProfilesWhenOnly2Left();
      }
    });

    this.loadNextProfile();

    const swiper = document.querySelector('.swiper-container')['swiper'];
    setTimeout(() => {
      if(state == 1) {
        swiper.slideNext(800)
      }else {
        swiper.slidePrev(800)
      }
    }, 600);
  }

  getProfiles = () => {
    this.route.paramMap.subscribe(url => {
      let id: number = Number(url.get("id"));
      this.service.getProfilesForSwipe(id).subscribe(data => {
        data.forEach(element => {
          this.users.push(element);
        })
      })
    });

    setTimeout(() => {
      this.loadNextProfile();
    },
    500);
  }

  getProfilesWhenOnly2Left = () => {
    this.route.paramMap.subscribe(url => {
      let id: number = Number(url.get("id"));
      this.service.getProfilesWeDontHaveForSwipe(id, this.users[0].id, this.users[1].id).subscribe(data => {
        data.forEach(element => {
          this.users.push(element);
        })
      })
    });
  }

  loadNextProfile = () => {
    if(this.users[0] != null){
      document.getElementById("nom-prenom").innerText = this.users[0].nickname_game;
      document.getElementById("avatar-card").setAttribute("src", "../../../assets/avatars/"+this.users[0].gamer.avatar+".jpg");
      document.getElementById("objectif").innerText = this.users[0].goals;
      document.getElementById("description").innerText = this.users[0].description;
    }
    else{
      const swiper = document.querySelector('.swiper-container')['swiper'];
      setTimeout(() => {
        swiper.enabled = false;}
      , 650)
      document.getElementById("nom-prenom").innerText = "Plus de profil !";
      document.getElementById("avatar-card").setAttribute("src", "../../../assets/avatars/null.jpg");
      document.getElementById("objectif").innerText = "Désolé !";
      document.getElementById("description").innerText = "Aucun profil ne correspond à vos critères, revenez plus tard.";
    }
  }
}