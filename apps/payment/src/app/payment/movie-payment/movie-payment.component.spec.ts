import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviePaymentComponent } from './movie-payment.component';

describe('MoviePaymentComponent', () => {
  let component: MoviePaymentComponent;
  let fixture: ComponentFixture<MoviePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
