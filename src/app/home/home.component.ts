import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api/api.service';
import { FhService } from '../core/services/FH-service/fh.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeWords: any;
  constructor(private fhApi: FhService) { }

  ngOnInit(): void {
    this.fhApi.getHomeWords().subscribe(
      res => {
        this.homeWords = res['rows'];
      }
   )
  }

}
