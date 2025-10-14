import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesPaymentComponent } from './movies-payment.component';

describe('MoviesPaymentComponent', () => {
  let component: MoviesPaymentComponent;
  let fixture: ComponentFixture<MoviesPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
