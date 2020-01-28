import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  signinCheck: string;
  constructor() { }
  userJson = [
    {
      "id": 1,
      "firstName": "Taher",
      "lastName": "Dahodwala",
      "email": "dahodwaltaher458@gmail.com",
      "password": "12345678"
    },
    {
      "id": 2,
      "firstName": "hello",
      "lastName": "hey",
      "email": "hello@gmail.com",
      "password": "321654987"
    }
  ];
  ngOnInit() {
  }

  check(hey: string) {
    console.log("kjdgjahbvfjabds" + hey)
    for (var i = 0; i < this.userJson.length; i++) {
      if (hey[0] == this.userJson[i].email && hey[1] == this.userJson[i].password)
        this.signinCheck = "true";
    }
    this.signinCheck = "false";
  }

}
