import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  myFunction(): void {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  showDropdown(): void {
    document.getElementById("dropdown-content").style.display = "block";
  }

  hideDropdown(): void {
    document.getElementById("dropdown-content").style.display = "none";
  }
}



