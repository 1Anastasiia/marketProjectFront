import { Component, OnInit } from '@angular/core';
import {UserJsonService} from '../../services/user-json.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userJsonService: UserJsonService) { }

  sendLoginObj(email: string,
               password: string) {

    this.userJsonService.loginUser (
      email,
      password
    ).subscribe(value => {});
  }

  ngOnInit() {
  }

}
