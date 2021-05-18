import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-swipe-ju',
  templateUrl: './swipe-ju.component.html',
  styleUrls: ['./swipe-ju.component.css']
})
export class SwipeJuComponent implements OnInit {
  
  images = [
    {nom : "Pif", prenom : "Coucou", age : 26},
    {nom : "Paf", prenom : "Cuicui", age : 30},
    {nom : "Pouf", prenom : "Crucru", age : 19},
  ]


  
  constructor() { }

  ngOnInit(): void {

    
  }
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30

  }
  swipeLeft() {
  
  }
 
  swipeRight() {
    
  }

}
