import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CourseComponent } from './course/course.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';

import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    SigninComponent,
    SignupComponent,
    UserEditComponent,
    CourseAddComponent,
    CourseEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
