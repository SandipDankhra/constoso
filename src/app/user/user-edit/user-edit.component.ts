import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  id: string;
  userFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

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
    this.id = this.route.snapshot.params['id'];
    this.userFormGroup = this.formBuilder.group({
      firstName: [this.userJson[this.id].firstName],
      lastName: [this.userJson[this.id].lastName],
      email: [this.userJson[this.id].email],
      password: [this.userJson[this.id].password],
    })
  }
  editUser() {
    this.userJson[this.id] = ({
      "id": (parseInt(this.id) + 1).toString(),
      "firstName": this.userFormGroup.controls.firstName.value,
      "lastName": this.userFormGroup.controls.lastName.value,
      "email": this.userFormGroup.controls.email.value,
      "password": this.userFormGroup.controls.password.value
    });
    console.log(this.userJson);
  }

}
