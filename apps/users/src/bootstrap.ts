import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UsersModule } from './app/users.module';

platformBrowserDynamic()
  .bootstrapModule(UsersModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
