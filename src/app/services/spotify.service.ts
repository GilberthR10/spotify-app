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

   TOKEN = 'Bearer BQBgoeg6yDgT4rHXiCwSJZf-EbgcqpmO7ukYYYCmSnRmYYvbKrjHhBrwH9BzWQ-kEmoPRakLpy9R9uYxW6Q' // 360min of term
   baseUrl = 'https://api.spotify.com/v1/';
   getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: this.TOKEN
    });
    return this.http.get(`${this.baseUrl}browse/new-releases`, {headers})
    .pipe( map( (data: any) => data.albums.items ));
   }

   getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization:  this.TOKEN
    });
    return this.http.get(`${this.baseUrl}search?q=${termino}&type=artist`, {headers})
    .pipe( map( (data: any) => data.artists.items ));
   }
}
