import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core'; // import LOCALE_ID

// import para configurar el idioma de la fecha en español
import { AppComponent } from './app.component';
import localEs from '@angular/common/locales/es';
import { registerLocaleData} from '@angular/common';
registerLocaleData(localEs);

@NgModule({
  declarations: [
    AppComponent
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
