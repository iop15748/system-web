import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'fcfs',
    loadChildren: './first-come-first-serve/first-come-first-serve.module#FirstComeFirstServeModule'
  },
  {
    path: 'rr',
    loadChildren: './round-robin/round-robin.module#RoundRobinModule'
  },
  {
    path: 'hpf',
    loadChildren: './high-priority-first/high-priority-first.module#HighPriorityFirstModule'
  },
  {path: '', redirectTo: 'fcfs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
