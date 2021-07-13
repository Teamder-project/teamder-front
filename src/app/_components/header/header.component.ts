import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  connected: boolean = false;
  avatar : string;

  constructor(private router : Router, private gamerService: GamerService) {

    document.addEventListener('click', this.hideDropdownMobileOnOutsideClick.bind(this));

    router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {
        if (localStorage.getItem("id") != null) {
          this.connected = true;
          this.gamerService.getById(localStorage.getItem("id")).subscribe(data => {
            this.avatar = data.avatar;
          })
        }
        else{
          this.connected = false;
        }
      }
    });

  }
  
  ngOnInit(): void {
    if (localStorage.getItem("id") != null) {
      this.connected = true;
    }
  }

  dropdownMobile(): void {
    document.getElementById("dropdown-content-mobile").classList.toggle("show");
  }

  hideDropdownMobile(): void {
    document.getElementById("dropdown-content-mobile").classList.remove("show");
  }

  hideDropdownMobileOnOutsideClick(event:any): void {
    if (!document.getElementById("dropdown-mobile").contains(event.target)){
      document.getElementById("dropdown-content-mobile").classList.remove("show");
    }
  }

  showDropdown(): void {
    document.getElementById("dropdown-content").style.display = "block";
  }

  hideDropdown(): void {
    document.getElementById("dropdown-content").style.display = "none";
  }

 
}



