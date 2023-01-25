import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaProdutosComponent } from './tela-produtos.component';

describe('TelaProdutosComponent', () => {
  let component: TelaProdutosComponent;
  let fixture: ComponentFixture<TelaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
