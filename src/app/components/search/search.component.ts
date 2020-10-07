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

  artists: any[] = [];
  loading: boolean;
  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtist(termino)
        .subscribe((data: any) => {
          this.artists = data;
          this.loading = false;
          return this.artists;
        });
  }
  ngOnInit(): void {
  }

}
