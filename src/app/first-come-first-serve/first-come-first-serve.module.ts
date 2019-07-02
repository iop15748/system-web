import {NgModule} from '@angular/core';
import {FirstComeFirstServeComponent} from './first-come-first-serve.component';
import {SharedModule} from '../shared/shared.module';
import {FirstComeFirstServeRoutingModule} from './first-come-first-serve-routing.module';

@NgModule({
  declarations: [
    FirstComeFirstServeComponent
  ],
  imports: [
    FirstComeFirstServeRoutingModule,
    SharedModule
  ]
})
export class FirstComeFirstServeModule {
}
