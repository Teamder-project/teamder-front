import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private fb: FormBuilder, private accountService: GamerService, private router: Router) {
    this.accountForm = this.fb.group({
      username: '',
      password: '',
      email: '',
      birthday: '',
      gender: '',
      country: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.router.navigate([`/home/`]);
  }
}