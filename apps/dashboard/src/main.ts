import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DashboardModule } from './app/dashboard.module';

platformBrowserDynamic()
  .bootstrapModule(DashboardModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
