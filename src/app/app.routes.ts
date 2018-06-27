import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { EscolherEstabelecimentoComponent } from "./escolher-estabelecimento/escolher-estabelecimento.component";
import { HomeComponent } from "./home/home.component";


export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'estabelecimento', component: EscolherEstabelecimentoComponent },
    { path: 'home', component: HomeComponent },
   


];