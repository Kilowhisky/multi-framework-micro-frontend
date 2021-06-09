import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routeFactory } from './routes/route-factory.initializer';
import { RouteLookupService } from './routes/route-lookup.service';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'disabled' })
  ],
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER, 
      useFactory: routeFactory,
      deps: [Router, RouteLookupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
