import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private baseUrl: string = 'https://api-celebrate.herokuapp.com/';

  constructor(private http: Http, ) {

  }

  public post(path: string, body: any, token: any) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    var options = new RequestOptions({
      headers: headers
    });

    options.headers.append('x-access-token', token);
    return this.http.post(this.baseUrl + path, body, options)
      .map((data: any) => data);
  }

  public get(path: string, token: any) {
    var headers = new Headers({
      'Content-Type': 'application/json'
    });
    var options = new RequestOptions({
      headers: headers
    });

    options.headers.append('x-access-token', token);

    return this.http.get(this.baseUrl + path, options)
      .map((data: any) => data);


  }
}
