import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  protected toFcFs(): void {
    this.router.navigate(['/fcfs']);
  }

  protected toRR(): void {
    this.router.navigate(['/rr']);
  }

  protected toHPF(): void {
    this.router.navigate(['/hpf']);
  }

}
