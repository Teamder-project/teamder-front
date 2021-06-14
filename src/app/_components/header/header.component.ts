import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showConversation: boolean = true;
  constructor(private router : Router) {

    document.addEventListener('click', this.hideDropdownMobileOnOutsideClick.bind(this));

    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {
        if (event['url'] == '/index') {
          this.showConversation = true;
        }        
        else { 
          this.showConversation = false;
        }
      }
    });
  }
  
  ngOnInit(): void {
    if (this.router.url == '/index') {
      this.showConversation = true;
    }        
    else {  
      this.showConversation = false;
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



