import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';




@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {
  
  images = [
    {nom : "Pif", prenom : "Coucou", age : 26},
    {nom : "Paf", prenom : "Cuicui", age : 30},
    {nom : "Pouf", prenom : "Crucru", age : 19},
  ]

  ngOnInit(): void {
    
  }

  swipeRight(): void {
    console.log("droite")
    
  }

  swipeLeft(): void {
    console.log("gauche")
    
  }

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 50,
    

  }


}
