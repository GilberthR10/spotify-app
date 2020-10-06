import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient ) {
    console.log('spotify on');
   }

   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBOnmVABTFEcUVlihPEezV9Xi4SvZnUgUscHiwUmXnhTfMSU4osdEtZwk-OR9ZA0xF1cTOqgIr4DtBRoEHOsCaSZcObWas7I_V4oQ20pU2JyU-6KWYOrMb2hG2A3V8p-NoFfbDYL6ax'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
   }

   getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBOnmVABTFEcUVlihPEezV9Xi4SvZnUgUscHiwUmXnhTfMSU4osdEtZwk-OR9ZA0xF1cTOqgIr4DtBRoEHOsCaSZcObWas7I_V4oQ20pU2JyU-6KWYOrMb2hG2A3V8p-NoFfbDYL6ax'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers});
   }
}
