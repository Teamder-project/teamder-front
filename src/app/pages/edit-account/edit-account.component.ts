import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gamer } from 'src/app/models/Gamer';
import { GamerService } from 'src/app/services/gamer.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  error = [];
  gamerForm: FormGroup;
  profile : Gamer;
  avatar: string = "default";

  constructor(private fb: FormBuilder, private gamerService: GamerService, private router: Router, private route: ActivatedRoute) {
    this.gamerForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(url => {
      let id : number = Number(url.get("id"));
      this.gamerService.getById(id).subscribe(profile => {
        this.profile = profile
        this.avatar = profile.avatar;
        this.updatedForm();
        this.avatar = document.getElementById("hidden") ? document.getElementById("hidden")['value'] : '';
      })
    })
  }

  displayAvatar = () => {
    document.getElementById("avatar-btn").classList.add("hide");
    document.getElementById("return").classList.remove("hide");
    let btn = document.getElementById("div-img");
    btn.classList.toggle("hide");
    let avatarChoisi = document.getElementById("avatar-choisi");
    avatarChoisi.classList.add("hide");
    let form = document.getElementById("form");
    form.classList.add("hide");
  }
  return = () => {
    document.getElementById("hidden").setAttribute("value", "default");
    document.getElementById("return").classList.add("hide")
    document.getElementById("avatar-btn").classList.remove("hide");
    document.getElementById("form").classList.remove("hide");
    document.getElementById("div-img").classList.add("hide");
  }
  chooseAvatar = (value : string) => {
    document.getElementById("return").classList.add("hide");
    document.getElementById("avatar-btn").classList.remove("hide");
    let input = document.getElementById("hidden");
    input.setAttribute("value", value);
    let btn = document.getElementById("div-img");
    btn.classList.toggle("hide")
    let avatarChoisi = document.getElementById("avatar-choisi");
    avatarChoisi.classList.remove("hide");
    document.getElementById("avatar-choisi").setAttribute("src", "../../../assets/avatars/"+value+".jpg");
    let form = document.getElementById("form");
    form.classList.remove("hide");
  }
  onSubmit = () : void => {

    let input = document.getElementById("hidden");
    this.gamerForm.value.avatar = input["value"];
    if(
      this.gamerForm.value.username != null &&
      this.gamerForm.value.password != null &&
      this.gamerForm.value.email != null &&
      this.gamerForm.value.birthday != null &&
      this.gamerForm.value.gender != null &&
      this.gamerForm.value.country != null &&
      this.gamerForm.value.avatar != null){

      if(this.gamerForm.value.username.length < 2 || this.gamerForm.value.username.length > 50){
        this.error = [];
        this.error.push("Le pseudo doit être compris entre 2 et 50 caractères");
      }
      else
      if(this.gamerForm.value.password.length < 4 || this.gamerForm.value.password.length > 50){
        this.error = [];
        this.error.push("Le mot de passe doit être compris entre 4 et 50 caractères");
      }
      else {
        this.gamerService.update(this.gamerForm.value).subscribe(data => {
          this.router.navigate([`/home`]);
        })
      }
    }
    else {
      this.error = [];
      this.error.push("Veuillez remplir tout les champs");
    }
  }

  updatedForm = () => {
    this.gamerForm = this.fb.group({
      id: this.profile.id,
      username: this.profile.username,
      password: this.profile.password,
      email: this.profile.email,
      birthday: this.profile.birthday,
      gender: this.profile.gender,
      country: this.profile.country,
      avatar: this.avatar
    })
  }

}
