import { Component, OnInit, Input } from '@angular/core';
import { UserJsonComponent } from './../user-json/user-json.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  users: User[];
  showUserList = false;
  showUserSignin = true;
  showSignup = false;
  showUserEdit = false;
  signinCheck: string;
  usersUrl = 'api/users';
  id: any;
  constructor(private http: HttpClient, private router: Router) { }

  getHeroesService(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }
  getHeroes(): void {
    this.getHeroesService().subscribe(users => (this.users = users));
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
    if (!JSON.parse(window.localStorage.getItem("isLogin"))) {
      this.showUserList = true;
      this.showUserSignin = JSON.parse(window.localStorage.getItem("isLogin"));
    }
  }
  showUserSigninFromChild(signin: boolean) {
    console.log("showUserSigninFromChild");
    window.localStorage.setItem("isLogin", "false");
    this.showUserSignin = false;
    this.showUserList = true;
    // this.getHeroes();

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
  signup(user: any) {
    this.userJson.push(user);
    this.showSignup = false;
    this.showUserList = true;
  }
  userEdit(show: any) {
    this.showUserEdit = false;
    this.showUserList = true;
    console.log(show);
    this.userJson[parseInt(show.id) - 1] = ({
      "id": show.id,
      "firstName": show.firstName,
      "lastName": show.lastName,
      "email": show.email,
      "password": show.password
    });
  }
  openSignup() {
    this.showSignup = true;
    this.showUserList = false;
  }
  openEdit(id: number) {
    this.showUserEdit = true;
    this.showUserList = false;
    this.id = this.userJson[id];
  }
  logout() {
    window.localStorage.setItem('isLogin', 'true');
    this.showUserList = false;
    this.showUserSignin = true;
  }
}
