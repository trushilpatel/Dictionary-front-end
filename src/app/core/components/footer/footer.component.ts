import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, DoCheck {
  body = document.body;
  html = document.documentElement;


  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    if (this.body.scrollHeight + 200 <= this.html.clientHeight) {
      document.getElementById('footer').style.position = 'fixed';
      document.getElementById('footer').style.left = '0';
      document.getElementById('footer').style.bottom = '0';
    } else {
      document.getElementById('footer').style.position = 'none';
      document.getElementById('footer').style.left = 'none';
      document.getElementById('footer').style.bottom = 'none';
    }
  }

}
