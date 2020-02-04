import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Input() signinChe: boolean;
  @Output() UsernamePasswordToParent = new EventEmitter<FormGroup>();
  @Output() showUserSigninFromChild = new EventEmitter<FormGroup>();
  userSigninFromgroup: FormGroup;
  constructor(private fromBuilder: FormBuilder, private router: Router) { }

  hey: any;
  ngOnInit() {
    this.userSigninFromgroup = this.fromBuilder.group({
      email: [''],
      password: ['']
    })
  }
  transfer() {
    this.router.navigateByUrl('/user');
    // this.UsernamePasswordToParent.emit("hello");
  }
  signin() {
    this.hey = [this.userSigninFromgroup.controls.email.value, this.userSigninFromgroup.controls.password.value];
    // this.UsernamePasswordToParent.emit(this.userSigninFromgroup);
    this.showUserSigninFromChild.emit(this.userSigninFromgroup);
    // this.router.navigateByUrl('/user');
    if (this.signinChe) {
      console.log("if " + this.signinChe);


    }
    else {
      console.log("else " + this.signinChe);
    }
  }
}
