import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'; // Observables


// Este injectable sirve para no declararlo en el archivo app.module.ts en providers
@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Servicio Spotify listo');
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCdw3IJvAvv8_GldaXCroWhLqIE5aP4PLmtnzf5_pG6bA6PmUSpyBTHrVPMbskLfei3vpC_BalwtPjw-sA'
    });

    return this.http.get(url, { headers } );

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map( data => data['albums'].items ));
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${ termino  }&type=artist&limit=15`).pipe(
      map( data =>  data['artists'].items )
    );
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${ id } `);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(
      map( data => data['tracks'])
    );
  }

}
