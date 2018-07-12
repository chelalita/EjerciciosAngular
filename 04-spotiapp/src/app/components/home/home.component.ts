import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];
  // Esto era para traer la lista de paises API
  /*constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (resp: any) => {
      this.paises = resp;
    });
  }*/

  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  errorMensaje: string;
  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      console.log(errorServicio);
      this.loading = false;
      this.error = true;
      this.errorMensaje = errorServicio.error.error.message;
    });
  }
  ngOnInit() {
  }

}
