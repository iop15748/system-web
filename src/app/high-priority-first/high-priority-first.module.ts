import {NgModule} from '@angular/core';
import {HighPriorityFirstComponent} from './high-priority-first.component';
import {SharedModule} from '../shared/shared.module';
import {HighPriorityFirstRoutingModule} from './high-priority-first-routing.module';

@NgModule({
  declarations: [
    HighPriorityFirstComponent
  ],
  imports: [
    HighPriorityFirstRoutingModule,
    SharedModule
  ]
})
export class HighPriorityFirstModule {
}
