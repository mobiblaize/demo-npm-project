import { Component } from '@angular/core';
import { SharedLibService } from 'mobiblaize-shared-lib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user = null;

  constructor(private devdacticLibService: SharedLibService) { }

  getData() {
    this.devdacticLibService.getData().subscribe(res => {
      console.log(res, 'res data');

      this.user = res;
    });
  }
}
