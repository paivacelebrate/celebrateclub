import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherEstabelecimentoComponent } from './escolher-estabelecimento.component';

describe('EscolherEstabelecimentoComponent', () => {
  let component: EscolherEstabelecimentoComponent;
  let fixture: ComponentFixture<EscolherEstabelecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherEstabelecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
