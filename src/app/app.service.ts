import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommentObj } from './commentObj';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AppService {
  commentsUrl = 'http://techtestbackend.azurewebsites.net/api/surveys';  // URL to web api

  constructor (private http: HttpClient) {}

  /** GET heroes from the server */
  getComments (): Observable<CommentObj[]> {
    return this.http.get<CommentObj[]>(this.commentsUrl);
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addComment (commentObj: CommentObj): Observable<CommentObj> {
    return this.http.post<CommentObj>(this.commentsUrl, commentObj, httpOptions);
  }
}
