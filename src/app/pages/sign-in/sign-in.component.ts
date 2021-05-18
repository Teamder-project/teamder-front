import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountForm: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {
    this.accountForm = this.fb.group({
      username: '',
      password: '',
      email: '',
      birthday: '',
      gender: '',
      country: '',
      avatar: ''
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.accountService.create(this.accountForm.value).subscribe(data => {
      this.router.navigate([`/home/`]);
    });
  }
}