declare var $: any
declare var PREFIX: string

import { NgModule } from 'ng-metadata/core'
import { AppComponent } from './app.component'
import 'angular-bind-notifier'

const prefixProvider = {
  provide: "PREFIX",
  useValue: PREFIX || '',
}

@NgModule({
  imports: [
    'ui.router',
    'angular.bind.notifier',
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    prefixProvider,
  ],
})
export class AppModule { }
