import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Microfrontend } from '../routes/routes.config';

@Component({
  templateUrl: './wrapper.component.html',
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {

  @ViewChild('vc', { read: ElementRef, static: true })
  vc: ElementRef;
  isLoading: boolean;

  constructor(private route: ActivatedRoute) { }

  async ngAfterContentInit(): Promise<void> {
    try {
      this.isLoading = true;

      // Load the module async from the config
      const config = this.route.snapshot.data['config'] as Microfrontend;
      const module = await loadRemoteModule(config);
      if (!module) {
        console.error('failed to load micro-frontend', config.remoteName);
      }

      // Inject it into the DOM
      const element = document.createElement(config.elementName);
      this.vc.nativeElement.appendChild(element);

    } catch (err) {
      console.error('error occured trying to load remote module', err);
    } finally {
      this.isLoading = false;
    }
  }
}
