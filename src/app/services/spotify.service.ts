import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('spotify on');
  }

   TOKEN :string = "Bearer BQA9uZa1YzCnsYcP6P-PJRV-yLB8kUo2ow7aeMrlwV7_grnRxyjtEXmXSKdSZyvrIlmg1ho7rupy8uAYBbY" //360min of term
   baseUrl: string = 'https://api.spotify.com/v1/';
   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': this.TOKEN
    });
    return this.http.get(`${this.baseUrl}browse/new-releases`, {headers})
    .pipe( map( data => data['albums'].items ));
   }

   getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization':  this.TOKEN
    });
    return this.http.get(`${this.baseUrl}search?q=${termino}&type=artist`, {headers})
    .pipe( map( data => data['artists'].items ));
   }
}
