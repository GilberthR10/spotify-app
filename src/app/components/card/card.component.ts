import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  seeArtist( song: any ): void {

    let artistId;
    if (song.type === 'artist') {
      artistId = song.id;
    } else {
      artistId = song.artists[0].id;
    }
    this.router.navigate([ '/artist', artistId ]);
  }

}
