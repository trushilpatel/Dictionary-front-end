import { Component, OnInit, Output, EventEmitter, DoCheck } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {
  @Output() searchedWord = new EventEmitter<string>();
  searchWord: string;
  regexp = new RegExp("^[a-zA-Z]+$");
  constructor(private router: Router) {}
  userExist: string;

  ngOnInit(): void {}
  ngDoCheck(){
    this.userExist = sessionStorage.getItem('userexist')
  }
  onClickSearch() {
    if (
      this.regexp.test(this.searchWord) == false &&
      this.searchWord == undefined
    ) {
      alert("please enter valid Word!!!");
      this.searchWord = "";
    } else {
      this.searchedWord.emit(this.searchWord);
      this.searchWord = "";
    }
  }

  onLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    sessionStorage.removeItem("userexist");
    this.router.navigate(["/"]);
  }
}
