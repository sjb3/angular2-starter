// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app/app.component';
// bootstrap(AppComponent);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);