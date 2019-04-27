import { Component, OnInit } from '@angular/core';
import {UserJsonService} from '../../services/user-json.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userJsonService: UserJsonService) { }

  sendRegistrationObj(name: string,
                      surname: string,
                      email: string,
                      password: string,
                      birth_date: string,
                      country: string,
                      city: string,
                      street: string,
                      apartment: string,
                      postal_code: string) {
    this.userJsonService.registerUser(
      name,
      surname,
      email,
      password,
      birth_date,
      country,
      city,
      street,
      apartment,
      postal_code).subscribe(value => {
    });

   // return this.registrationObj;
  }

  ngOnInit() {
  }
}
