import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { LoginServiceService } from '../login-service.service';
import { Alert } from 'selenium-webdriver';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display = 'none';
  displayModal = 'none';
  userId: any;
  password: any;
  loginForm: FormGroup;

  

  constructor(public router: Router, 
    private http: Http, 
    public server: LoginServiceService,) {


  }
 ngOnInit() {
}
  openModal() {
    this.display = "block";
}
  fecharModalNovaSenha() {
     this.displayModal = 'none';

}
  openModalNovaSenha() {
    this.displayModal = "block";
}
  fecharModal() {
    this.display = 'none';
    this.displayModal = 'none';
}
  fazerLogin() {
    let body = {
      userId: this.userId,
      password: this.password,
      
}


console.log('Body:', body)
this.server.post("user/login", body, '').subscribe(
  result => {
    if (result._body) { 

      let resp = JSON.parse(result._body);
      resp.data.password = this.password;
      console.log('Resposta',resp.data);
    
      if (resp.data.trocarSenha == true) {
        this.openModalNovaSenha();
      } else {
        this.router.navigateByUrl('/estabelecimento');
      }

    } else {

    }

  },
  err => {
    if (err._body) {
      let resp = JSON.parse(err._body);
      console.log('Erro', resp.msg)
    } else {

    }
  }
);
   


  }
}

