import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HighPriorityFirstComponent} from './high-priority-first.component';

const routes: Routes = [
  {path: '', component: HighPriorityFirstComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighPriorityFirstRoutingModule {
}
