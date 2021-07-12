import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { Gamer } from 'src/app/models/Gamer';
import { EventEmitterMatchService } from 'src/app/services/event-emitter-match.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  notification: string = "";
  connected: boolean = false;
  
  constructor(private router : Router, private eventEmitterMatchService: EventEmitterMatchService) {

    document.addEventListener('click', this.hideDropdownMobileOnOutsideClick.bind(this));

    router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {
        if (localStorage.getItem("id") != null) {
          this.connected = true;
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

    if (this.eventEmitterMatchService.subsVar==undefined) {    
      this.eventEmitterMatchService.subsVar = this.eventEmitterMatchService.invokeHeaderFunction.subscribe((gamer: Gamer) => {
        this.showNotification.bind(gamer);
      });
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

  showNotification(gamer: Gamer): void{
    this.notification = "1"
  }
}



