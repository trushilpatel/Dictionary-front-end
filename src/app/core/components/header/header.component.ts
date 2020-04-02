import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  DoCheck
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, DoCheck {
  @Output() searchedWord = new EventEmitter<string>();
  userExist: any;
  searchWord = "";
  regexp = new RegExp("^[a-zA-Z]+$");
  constructor(private router: Router) {}

  ngOnInit(): void {}
  ngDoCheck() {
    this.userExist = sessionStorage.getItem("userexist");
  }

  onClickSearch() {
    this.searchWord = this.searchWord.trim();

    if (this.searchWord === "" && this.regexp.test(this.searchWord) === false) {
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
