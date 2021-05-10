import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) {

     }

  ngOnInit(): void {
  }

  redirectTo = (e) => {

    console.log(e)
    if (e != "Jeux :"){
      this.router.navigate([`/${e}`])
    }
    else {
      this.router.navigate([`/home`])
    }
  }
}
