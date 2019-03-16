import {Component, OnInit} from '@angular/core';
import {MainJsonService} from '../services/main-json.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'marketProject';
  counter = 12;
  searchObj = {
    search: ''
  };
  OnClicButton() {
    this.counter = this.counter + 1;
    return this.counter;
  }
  SendDataSearch(data) {
    console.log(data);
  }
}
