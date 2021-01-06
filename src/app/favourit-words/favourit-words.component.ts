import { Component, OnInit, OnDestroy } from "@angular/core";
import { ApiService } from "../core/services/api/api.service";
import { FhService } from "../core/services/FH-service/fh.service";

@Component({
  selector: "app-favourit-words",
  templateUrl: "./favourit-words.component.html",
  styleUrls: ["./favourit-words.component.scss"]
})
export class FavouritWordsComponent implements OnInit {
  favouriteWords: any;

  constructor(private fhApi: FhService) {}

  ngOnInit(): void {
    this.fhApi.getFavouriteWords().subscribe(res => {
      console.log(res);
      this.favouriteWords = res["rows"];

      this.favouriteWords = this.favouriteWords.reverse();

    });
  }
}
