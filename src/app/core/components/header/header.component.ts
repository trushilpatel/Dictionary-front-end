import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchedWord = new EventEmitter<string>();
  searchWord: string;
  regexp = new RegExp('^[a-zA-Z]+$')
  constructor() { }

  ngOnInit(): void {
  }

  onClickSearch() {
    if (this.regexp.test(this.searchWord) == false && this.searchWord == undefined) {
      alert("please enter valid Word!!!");
      this.searchWord = '';
    } else {
      this.searchedWord.emit(this.searchWord);
      this.searchWord = '';
    }
  }
}
