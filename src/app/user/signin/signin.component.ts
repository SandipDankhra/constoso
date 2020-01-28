import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Input() signinChe: string = "jhasbfkjasbg";
  @Output() UsernamePasswordToParent = new EventEmitter<string>();

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
    //this.UsernamePasswordToParent.emit("hello");
  }
  signin() {
    this.hey = [this.userSigninFromgroup.controls.email.value, this.userSigninFromgroup.controls.password.value];
    
    // this.router.navigateByUrl('/user');
    console.log(this.signinChe);

  }

}
