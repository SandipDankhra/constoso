import { Component, OnInit, Input } from '@angular/core';
import { UserJsonComponent } from './../user-json/user-json.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  showUserList = false;
  showUserSignin = true;
  signinCheck: string;
  constructor(private router: Router) { }

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
  }
  showUserSigninFromChild(signin: boolean) {
    console.log("showUserSigninFromChild");
    this.showUserSignin = false;
    this.showUserList = true;

  }
  check(hey: string) {
    console.log("" + hey)

    // for (var i = 0; i < this.userJson.length; i++) {
    //   if (hey[0] == this.userJson[i].email && hey[1] == this.userJson[i].password)
    //     this.signinCheck = "true";
    // }
    this.signinCheck = "true";
  }
  delete(id: number) {
    // this.router.navigateByUrl("/signin")
    this.userJson.splice(id, 1);
    console.log(this.userJson);
  }

}
