import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './store/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-platform-challenge';
  isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store<{ auth: AuthState }>,
    private router: Router
  ) {
    this.isLoggedIn$ = this.store.pipe(select('auth', 'isLoggedIn'));
  }

  ngOnInit() {
    this.isLoggedIn$.subscribe(
      (isLoggedIn) => !isLoggedIn && this.router.navigate(['/login'])
    );
  }
}

