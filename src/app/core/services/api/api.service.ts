import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  authenticatedUser() {
    return this.http.get(environment.apiUrl + "/api/login");
  }

  getGD(word) {
    return this.http.get(environment.apiUrl + "/api/gd/" + word);
  }

  getMW(word) {
    return this.http.get(environment.apiUrl + "/api/mw/" + word);
  }

  getOX(word) {
    return this.http.get(environment.apiUrl + "/api/ox/" + word);
  }

  // getTranslation(word, destLanguage = undefined) {
  //   if (destLanguage === undefined) {
  //     return this.http.get(environment.apiUrl + "/api/trans/" + word);
  //   }
  //   return this.http.get(
  //     environment.apiUrl + "/api/trans/" + destLanguage + "/" + word
  //   );
  // }
}
