import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth.actions';
import { AuthState } from '../../../store/auth.reducer';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState }>
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11}|\S+@\S+\.\S+)$/
        ),
      ]),
      senha: new FormControl('', Validators.required),
    });
  }

  submitForm() {
    if (!this.loginForm.valid) return;
    console.log(this.loginForm.value);
    this.router.navigate(['/user/home']);
    this.store.dispatch(login());
  }
}
