import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core'; // import LOCALE_ID


import { AppComponent } from './app.component';
import { CapitalizadoPipe} from './pipes/capitalizado.pipe';

// import para configurar el idioma de la fecha en español
import localEs from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent,
      CapitalizadoPipe,
      DomseguroPipe,
      ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
        provide: LOCALE_ID, useValue: 'es' // Se agrega la variable LOCALE_ID y se configura el idioma
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
