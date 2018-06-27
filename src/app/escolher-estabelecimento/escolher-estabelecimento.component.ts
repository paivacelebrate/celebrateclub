import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-escolher-estabelecimento',
  templateUrl: './escolher-estabelecimento.component.html',
  styleUrls: ['./escolher-estabelecimento.component.css']
})
export class EscolherEstabelecimentoComponent implements OnInit {
  display='none';
  @ViewChild('myModal') myModal:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  openModal(){
    this.display="block";
  }
  fecharModal(){
    this.display='none';
  }
}
