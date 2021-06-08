import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit(): void {

  }

  showLogin(): void {
    document.getElementById("login-content").style.display = "block";
  }

  hideLogin(): void {
    document.getElementById("login-content").style.display = "none";
  }

  showDropdown(): void {
    document.getElementById("dropdown-content").style.display = "block";
  }

  hideDropdown(): void {
    document.getElementById("dropdown-content").style.display = "none";
  }
}

     

