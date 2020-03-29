import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ApiService } from '../core/services/api/api.service';

@Component({
  selector: 'app-define-word',
  templateUrl: './define-word.component.html',
  styleUrls: ['./define-word.component.scss']
})
export class DefineWordComponent implements OnInit {
  dictionaries = ['Google', 'Oxford', 'Merriam Webster', 'Hindi & Gujarati'];
  dictionaryChoice = 'Google';
  dictionaryData = {};

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
        switch (this.dictionaryChoice) {
          case 'Google':
            {
              this.wordDefinition = this.api.getGD(params['word']).subscribe(
                res => {
                  this.changeScss()
                  if (res['gd']['title'] === undefined) {
                    this.dictionaryData['Google'] = res['gd'];
                  }
                }

                )

              break;
            }
          case 'Oxford':
            {
              break;
            }

          case 'Merriam Webster':
            {
              break;
            }
          case 'Hindi & Gujarati':
            {
              break;
            }
        }
      }
    }
    );
  }


  onChangeDicitonaryChoice(dictionary) {
    this.dictionaryChoice = dictionary;
    console.log("you changed Dictionary : " + this.dictionaryChoice);
    this.changeScss();
  }

  changeScss() {
    let dictionaries = document.getElementsByClassName('dictionary-button')
    for (let dictionary = 0; dictionary < dictionaries.length; dictionary++) {

      if (dictionaries[dictionary].id === this.dictionaryChoice) {
        document.getElementById(dictionaries[dictionary].id).style.backgroundColor = 'black';
      } else {
        console.log("called")

        document.getElementById(dictionaries[dictionary].id).style.backgroundColor = 'transparent';
      }
    }
  }

}
