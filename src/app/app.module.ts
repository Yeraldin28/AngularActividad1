import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EjercicioParImparComponent } from './components/ejercicio-par-impar/ejercicio-par-impar.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioParImparComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
