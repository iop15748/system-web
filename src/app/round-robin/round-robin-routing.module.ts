import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoundRobinComponent} from './round-robin.component';

const routes: Routes = [
  {path: '', component: RoundRobinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoundRobinRoutingModule {
}
