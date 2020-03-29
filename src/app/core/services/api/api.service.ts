import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGD(word) {
    console.log(environment.apiUrl)
    return this.http.get(environment.apiUrl + "/api/gd/" + word);
  }

}
