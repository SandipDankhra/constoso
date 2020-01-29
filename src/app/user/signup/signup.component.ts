import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  userJson = [
    {
      "id": "1",
      "firstName": "Taher",
      "lastName": "Dahodwala",
      "email": "dahodwaltaher458@gmail.com",
      "password": "12345678"
    },
    {
      "id": "2",
      "firstName": "hello",
      "lastName": "hey",
      "email": "hello@gmail.com",
      "password": "321654987"
    }
  ];
  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    })
  }
  signup() {
    this.userJson.push({
      "id": (this.userJson.length + 1).toString(),
      "firstName": this.userFormGroup.controls.firstName.value,
      "lastName": this.userFormGroup.controls.lastName.value,
      "email": this.userFormGroup.controls.email.value,
      "password": this.userFormGroup.controls.password.value
    });
    console.log(this.userJson);

  }

}
