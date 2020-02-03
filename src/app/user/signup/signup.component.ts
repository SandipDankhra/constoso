import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Output() showsignup = new EventEmitter<any>();
  userFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  userJson = [];
  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    })
  }
  signup() {

    this.showsignup.emit({
      "id": (this.userJson.length + 1).toString(),
      "firstName": this.userFormGroup.controls.firstName.value,
      "lastName": this.userFormGroup.controls.lastName.value,
      "email": this.userFormGroup.controls.email.value,
      "password": this.userFormGroup.controls.password.value
    });
  }

}
