import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() id: any;
  userFormGroup: FormGroup;
  @Output() showUserEdit = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: [this.id.firstName],
      lastName: [this.id.lastName],
      email: [this.id.email],
      password: [this.id.password],
    })
  }
  editUser() {
    this.showUserEdit.emit({
      "id": this.id.id,
      "firstName": this.userFormGroup.controls.firstName.value,
      "lastName": this.userFormGroup.controls.lastName.value,
      "email": this.userFormGroup.controls.email.value,
      "password": this.userFormGroup.controls.password.value
    });
  }


}
