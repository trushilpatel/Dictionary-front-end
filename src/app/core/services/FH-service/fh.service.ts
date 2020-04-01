import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class FhService {
  constructor(private http: HttpClient) {}

  addHistoryWord(word) {
    return this.http.get(environment.apiUrl + "/api/add/history/" + word);
  }
  getHistoryWords() {
    return this.http.get(environment.apiUrl + "/api/add/history");
  }
  deleteHistoryWord(word) {
    return this.http.get(environment.apiUrl + "/api/delete/history/" + word);
  }

  addFavouriteWord(word) {
    return this.http.get(environment.apiUrl + "/api/add/favourite/" + word);
  }
  getFavouriteWords() {
    return this.http.get(environment.apiUrl + "/api/get/favourite");
  }
  deleteFavouriteWord(word) {
    return this.http.get(environment.apiUrl + "/api/delete/favourite/" + word);
  }

  addHomeWord(word) {
    return this.http.get(environment.apiUrl + "/api/add/home/" + word);
  }
  getHomeWords() {
    return this.http.get(environment.apiUrl + "/api/get/home");
  }
  deleteHomeWord(word) {
    return this.http.get(environment.apiUrl + "/api/delete/home/" + word);
  }
}
