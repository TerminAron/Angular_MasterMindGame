import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game/game.component';
import { PegComponent } from './peg/peg.component';
import { GameOverComponent } from './game-over/game-over.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PegComponent,
    GameOverComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    //útvonalak beregisztrálása!!!
    RouterModule.forRoot([
      { path: 'game', component: GameComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: LoginComponent },
      { path: 'menu', component: MenuComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
