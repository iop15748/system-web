import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComeFirstServeComponent} from './first-come-first-serve.component';

const routes: Routes = [
  {path: '', component: FirstComeFirstServeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstComeFirstServeRoutingModule {
}
