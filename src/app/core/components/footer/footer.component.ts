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
    if ( this.html.scrollHeight - this.html.clientHeight < 20) {
      document.getElementById('footer').style.position = 'fixed';
      document.getElementById('footer').style.left = '0';
      document.getElementById('footer').style.bottom = '0';
//      console.log("footer : ",this.html.scrollHeight, this.html.clientHeight)
    } else {
      document.getElementById('footer').style.position = 'unset';
      document.getElementById('footer').style.left = 'unset';
      document.getElementById('footer').style.bottom = 'unset';
      console.log("hello this is footer")
  //    console.log("footer : ",this.html.scrollHeight - this.html.clientHeight)

    }
  }

}
