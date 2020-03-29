import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ApiService } from '../core/services/api.service';

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
                  this.dictionaryData['Google'] = res['gd'];
                  console.log(this.dictionaryData);
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
  }

}
