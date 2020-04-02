import { Component, OnInit, OnDestroy } from "@angular/core";
import { FhService } from "../core/services/FH-service/fh.service";

@Component({
  selector: "app-word-history",
  templateUrl: "./word-history.component.html",
  styleUrls: ["./word-history.component.scss"]
})
export class WordHistoryComponent implements OnInit {
  historyWords: any;

  constructor(private fhApi: FhService) {}

  ngOnInit(): void {
    this.fhApi.getHistoryWords().subscribe(res => {
      this.historyWords = res["rows"];
      this.historyWords = this.historyWords.reverse();
    });
  }
}
