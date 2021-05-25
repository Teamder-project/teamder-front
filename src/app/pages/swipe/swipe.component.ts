import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { HammerGestureConfig } from "@angular/platform-browser";
import * as hammer from "hammerjs";


@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent extends HammerGestureConfig implements OnInit {
  
  users = [
    {nom : "Pif", prenom : "Coucou", age : 26},
    {nom : "Paf", prenom : "Cuicui", age : 30},
    {nom : "Pouf", prenom : "Crucru", age : 58},
    {nom : "toto", prenom : "roro", age : 12},
    {nom : "titi", prenom : "riri", age : 27},
    {nom : "tutu", prenom : "rara", age : 69},
    {nom : "cucu", prenom : "momo", age : 14},
    {nom : "coco", prenom : "mimi", age : 18},
    {nom : "caca", prenom : "mama", age : 78},
  ]

  likes = [

  ]

  dislikes = [

  ]

  overrides = <any>{
    swipe: { direction: hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false }
  };

  constructor() {
    super();
   }

  ngOnInit(): void {

    setInterval(this.rafraichir, 100);
  }

  rafraichir = () => {
    
    let id = document.querySelector("#swipe");
    if(id.classList.contains("swiper-slide-prev")) {
  
    }
 
  }
  
  like = () => {

    let id = document.querySelector("#swipe");
    id.remove();
    let user = { nom: "Ajouter", prenom: "Miguel", age: 45}
    this.likes.push(user);
    console.log(this.likes);

  }

  dislike = () => {

    let id = document.querySelector("#swipe");
    id.remove();
    let user = { nom: "Next", prenom: "Roger", age: 87 }
    this.dislikes.push(user);
    console.log(this.dislikes);
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30

  }


}
