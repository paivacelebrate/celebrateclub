import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { EscolherEstabelecimentoComponent } from './escolher-estabelecimento/escolher-estabelecimento.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EscolherEstabelecimentoComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpModule,
    ReactiveFormsModule

  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
