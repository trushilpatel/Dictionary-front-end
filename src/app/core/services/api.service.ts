import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://trushil-dictionary-back-end.herokuapp.com";
  constructor(private http: HttpClient) { }

  getGD(word){
    return this.http.get(this.baseUrl + "/api/gd/" + word);
  }

}
