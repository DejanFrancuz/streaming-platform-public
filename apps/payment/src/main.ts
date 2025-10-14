import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PaymentModule } from './app/payment.module';

platformBrowserDynamic()
  .bootstrapModule(PaymentModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
