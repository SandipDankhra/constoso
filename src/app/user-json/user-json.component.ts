import { Component, OnInit } from '@angular/core';
import { UserJsonService, User } from './user-json.service';

@Component({
  selector: 'app-user-json',
  templateUrl: './user-json.component.html',
  styleUrls: ['./user-json.component.css']
})
export class UserJsonComponent implements OnInit {

  constructor(private userJsonService: UserJsonService) { }
  userJson: User;
  headers: string[];
  ngOnInit() {
  }
  showConfig() {
    this.userJsonService.getUser()
      .subscribe((data: User) => this.userJson = {
        userUrl: data['userUrl'],
        jsonFile: data['jsonFile']
      });
  }

}
