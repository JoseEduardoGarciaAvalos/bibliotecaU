import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CatalogoModule } from "./catalogo/catalogo.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificacionComponent } from './notificacion/notificacion.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    NotificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CatalogoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
