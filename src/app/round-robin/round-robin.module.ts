import {NgModule} from '@angular/core';
import {RoundRobinComponent} from './round-robin.component';
import {SharedModule} from '../shared/shared.module';
import {RoundRobinRoutingModule} from './round-robin-routing.module';

@NgModule({
  declarations: [
    RoundRobinComponent
  ],
  imports: [
    RoundRobinRoutingModule,
    SharedModule
  ]
})
export class RoundRobinModule {
}
