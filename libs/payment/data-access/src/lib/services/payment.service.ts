import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { loadStripe, StripeCardElement, StripeElements } from '@stripe/stripe-js';
import { PaymentIntentRequest, PaymentRequest } from '../models/Payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}

  private stripePromise = loadStripe('pk_test_51S7dt7PHHbkxw0kucm8D5MBLMXzt0PXf1PQMJGfF4zSq1zEp9irq8LbcCRC1llav1Jq1dFDYfePGVR4zR3YnJnvy00FukXUTEy');
  private elements?: StripeElements;
  private cardElement$ = new BehaviorSubject<StripeCardElement | null>(null);

  async initCardElement(containerId: string) {
    const stripe = await this.stripePromise;
    this.elements = stripe!.elements();
    const card = this.elements.create('card');
    card.mount(`#${containerId}`);
    this.cardElement$.next(card);
  }

  getCardElement$(): Observable<StripeCardElement | null> {
    return this.cardElement$.asObservable();
  }

  createPaymentIntent(paymentIntentRequests: PaymentIntentRequest[]): Observable<any> {
    const request: PaymentRequest = { items: paymentIntentRequests };
    return this.httpClient.post<any>(
      'http://localhost:8080/api/payments/create-intent',
      request
    );
  }

  confirmPayment(clientSecret: string): Observable<any> {
    const paymentIntentId = clientSecret.split('_secret')[0];
    return this.httpClient.post<any>(
      `http://localhost:8080/api/payments/confirm-payment`, { paymentIntentId }
    );
  }
}
