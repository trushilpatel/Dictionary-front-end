import { Component, OnInit, OnChanges, ɵConsole } from "@angular/core";
import { Router, ActivatedRoute, ParamMap, Params } from "@angular/router";
import { ApiService } from "../core/services/api/api.service";
import { FhService } from "../core/services/FH-service/fh.service";
declare const responsiveVoice: any;

@Component({
  selector: "app-define-word",
  templateUrl: "./define-word.component.html",
  styleUrls: ["./define-word.component.scss"],
})
export class DefineWordComponent implements OnInit {
  dictionaries = ["Google", "Oxford", "MW"];
  dictionaryChoice = "Google";
  dictionaryData = {};
  gotAudio = false;

  searchedWord: string;
  favouriteWord = false;
  homeWord = false;
  wordDefinition: {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService,
    private fhApi: FhService
  ) {}

  ngOnInit(): void {
    this.searchedWord = this.route.snapshot.paramMap.get("word").trim();
    this.route.params.subscribe((params: Params) => {
      if (params["word"].trim() == "") {
        alert("please enter valid Word!!! " + params["word"]);
      } else {
        this.searchedWord = params["word"].trim();
        // this.api
        //   .getTranslation(this.searchedWord, params["destLanguage"])
        //   .subscribe(res => {
        //     this.dictionaryData["Translate"] = res["translation"];
        //     this.favouriteWord = res["favourite"];
        //     this.homeWord = res["home"];
        //     if (this.dictionaryData["Translate"] !== undefined) {
        //       console.log(this.dictionaryData);
        //     }
        //     console.log(res);
        //     this.dictionaryChanged();
        //   });

        this.fhApi.addHistoryWord(this.searchedWord).subscribe((res) => {
          console.log(this.searchedWord, " Added to your History");
        });
      }
    });
  }

  dictionaryChanged() {
    switch (this.dictionaryChoice) {
      case "Google": {
        this.wordDefinition = this.api
          .getGD(this.searchedWord)
          .subscribe((res) => {
            this.changeScss();
            if (res["gd"]["title"] === undefined) {
              this.dictionaryData["Google"] = res["gd"];
              console.log(this.dictionaryData);
            } else {
              this.dictionaryData["Google"] = undefined;
              alert("please enter valid dictionary word");
            }
          });
        break;
      }
      case "Oxford": {
        this.wordDefinition = this.api
          .getOX(this.searchedWord)
          .subscribe((res) => {
            console.log(res);

            if (res["error"] === undefined) {
              this.changeScss();
              this.dictionaryData["Oxford"] = res;
            } else {
              this.dictionaryData["Oxford"] = undefined;
              alert("please enter valid dictionary word");
            }
          });
        break;
      }

      case "MW": {
        this.wordDefinition = this.api
          .getMW(this.searchedWord)
          .subscribe((res) => {
            this.changeScss();
            this.dictionaryData["MW"] = res["MWL"];
            console.log(res);
          });
        break;
      }
    }
  }

  onChangeDicitonaryChoice(dictionary) {
    this.dictionaryChoice = dictionary;
    console.log("you changed Dictionary : " + this.dictionaryChoice);
    this.dictionaryChanged();
    this.changeScss();
  }

  changeScss() {
    let dictionaries = document.getElementsByClassName("dictionary-button");
    for (let dictionary = 0; dictionary < dictionaries.length; dictionary++) {
      if (dictionaries[dictionary].id === this.dictionaryChoice) {
        document.getElementById(
          dictionaries[dictionary].id
        ).style.backgroundColor = "black";
      } else {
        document.getElementById(
          dictionaries[dictionary].id
        ).style.backgroundColor = "transparent";
      }
    }
  }

  wordAudio = document.getElementById("speak-word");
  speakWord(word) {
    responsiveVoice.speak(word);
  }

  setFavouriteWord() {
    this.favouriteWord = !this.favouriteWord;

    if (this.favouriteWord == true) {
      this.fhApi.addFavouriteWord(this.searchedWord).subscribe((res) => {
        console.log(res);
        console.log(this.searchedWord, "added to Favourite Word");
      });
    } else {
      this.fhApi.deleteFavouriteWord(this.searchedWord).subscribe((res) => {
        console.log(res);
        console.log(this.searchedWord, "removed from Favourite Word");
      });
    }
  }

  setHomeWord() {
    this.homeWord = !this.homeWord;
    if (this.homeWord == true) {
      this.fhApi.addHomeWord(this.searchedWord).subscribe((res) => {
        console.log(res);
        console.log(this.searchedWord, "added to Favourite Word");
      });
    } else {
      this.fhApi.deleteHomeWord(this.searchedWord).subscribe((res) => {
        console.log(res);
        console.log(this.searchedWord, "removed from Favourite Word");
      });
    }
  }
}
