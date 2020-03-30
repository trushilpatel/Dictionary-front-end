import { Component, OnInit, OnChanges, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ApiService } from '../core/services/api/api.service';
declare const responsiveVoice: any;

@Component({
  selector: 'app-define-word',
  templateUrl: './define-word.component.html',
  styleUrls: ['./define-word.component.scss']
})
export class DefineWordComponent implements OnInit {
  dictionaries = ['Google', 'Oxford', 'MW'];
  dictionaryChoice = 'Oxford';
  dictionaryData = {};
  gotAudio = false; 

  searchedWord: string;
  wordDefinition: {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.searchedWord = this.route.snapshot.paramMap.get('word');
    this.route.params.subscribe((params: Params) => {

      if (params['word'] == '') {
        alert("please enter valid Word!!!");
      } else {

        this.searchedWord = params['word'];
        this.api.getTranslation(this.searchedWord, params['destLanguage'])
          .subscribe(
            res => {
              this.dictionaryData['Translate'] = res
              if (this.dictionaryData['Translate'] !== undefined) {
                console.log(this.dictionaryData)
              }
              this.dictionaryChanged()
            })
      }
    }
    );
  }

  dictionaryChanged() {
    switch (this.dictionaryChoice) {
      case 'Google':
        {
          this.wordDefinition = this.api.getGD(this.searchedWord)
            .subscribe(
              res => {
                this.changeScss()
                if (res['gd']['title'] === undefined) {
                  this.dictionaryData['Google'] = res['gd'];
                  console.log(this.dictionaryData)
                } else {
                  this.dictionaryData['Google'] = undefined;
                  alert("please enter valid dictionary word")
                }

              }
            )
          break;
        }
      case 'Oxford':
        {
          this.wordDefinition = this.api.getOX(this.searchedWord)
            .subscribe(
              res => {
                console.log(res);

                if (res['error'] === undefined) {
                  this.changeScss()
                  this.dictionaryData['Oxford'] = res;
                } else {
                  this.dictionaryData['Oxford'] = undefined;
                  alert("please enter valid dictionary word")
                }
              }
            )
          break;

        }

      case 'Merriam Webster':
        {
          this.wordDefinition = this.api.getGD(this.searchedWord)
            .subscribe(
              res => {
                this.changeScss()
                if (res['gd']['title'] === undefined) {
                  this.dictionaryData['MW'] = res['gd'];
                }
              }
            )
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
    let dictionaries = document.getElementsByClassName('dictionary-button')
    for (let dictionary = 0; dictionary < dictionaries.length; dictionary++) {

      if (dictionaries[dictionary].id === this.dictionaryChoice) {
        document.getElementById(dictionaries[dictionary].id).style.backgroundColor = 'black';
      } else {
        document.getElementById(dictionaries[dictionary].id).style.backgroundColor = 'transparent';
      }
    }
  }

  wordAudio = document.getElementById('speak-word');
  speakWord(word){
    responsiveVoice.speak(word)
}

}
