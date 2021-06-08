import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private focusLogin : boolean = false;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    })
    document.addEventListener('click', this.hideOnClick.bind(this));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

  showLogin(): void {
    document.getElementById("login-content").style.display = "block";
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
}
