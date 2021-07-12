import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitterMatchService } from 'src/app/services/event-emitter-match.service';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private wsNotifs : WebSocket;
  private focusLogin : boolean = false;
  label : string = "connexion";

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private service: GamerService, private router: Router, private eventEmitterMatchService: EventEmitterMatchService) {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    })
    document.addEventListener('click', this.hideOnClick.bind(this));
  }

  ngOnInit(): void {
    if(localStorage.getItem("id") != null){
      this.label = "déconnexion";

      this.wsNotifs = new WebSocket("ws://localhost:8080/notifsSwipe/" + localStorage.getItem("id"));
      this.wsNotifs.onmessage = this.receive.bind(event);
    }
  }

  onSubmit(): void {
    document.getElementById("login-content").style.display = "none";
    this.service.login(this.loginForm.value).subscribe(data =>{
      localStorage.setItem("id", data);
      this.label = "déconnexion";
      document.getElementById("email")["value"] = "";
      document.getElementById("password")["value"] = "";
      this.loginForm.value.email = "";
      this.loginForm.value.password = "";
      this.router.navigate(["index"]);

      this.wsNotifs = new WebSocket("ws://localhost:8080/notifsSwipe/" + localStorage.getItem("id"));
      this.wsNotifs.onmessage = this.receive.bind(event);
    })
  }

  logOut(): void {
    if(this.label == "déconnexion"){
      localStorage.removeItem("id");
      this.label = "connexion";
      this.router.navigate(["home"]);
    }
  }

  showLogin(): void {
    if(this.label == "connexion"){
      document.getElementById("login-content").style.display = "block";
    }
  }

  hideLogin(): void {
    if(!this.focusLogin){
      document.getElementById("login-content").style.display = "none";
    }
  }

  focus(): void {
    this.focusLogin = true;
  }

  focusOut(): void {
    this.focusLogin = false;
  }

  hideOnClick(event:any) {
    if (!document.getElementById("login-content").contains(event.target)) {
      document.getElementById("login-content").style.display = "none";
    }
  }

  receive(event) {
    console.log(JSON.parse(event.data))
    this.eventEmitterMatchService.onNotificationMatch.bind(JSON.parse(event.data));
  }
}
