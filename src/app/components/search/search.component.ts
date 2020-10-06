import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtist(termino)
        .subscribe(data => {
          console.log(data);
        });
  }
  ngOnInit(): void {
  }

}
