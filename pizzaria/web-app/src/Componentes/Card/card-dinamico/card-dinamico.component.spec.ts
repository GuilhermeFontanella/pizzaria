import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDinamicoComponent } from './card-dinamico.component';

describe('CardDinamicoComponent', () => {
  let component: CardDinamicoComponent;
  let fixture: ComponentFixture<CardDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDinamicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
