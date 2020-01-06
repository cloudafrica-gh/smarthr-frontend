import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { DafabetService } from 'src/app/services/dafabet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username: '';
  email = '';
  password = '';
  isLoadingResults = false;
  baseUrl: string = environment.baseUrl;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private dafabetService: DafabetService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
    this.getAllTransactions();
  }

  onFormSubmit(form: NgForm) {
    console.log('client login form >>>>', form);
    this.authService.login(form)
      .subscribe(res => {
        console.log('login response >>>', res);
        if (res.accessToken) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['dashboard']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  testExternalApi() {
    this.authService.testApi()
      .subscribe(res => {
        console.log('>>>', res);
      }, err => {
        console.log(err);
      });
  }

  getAllTransactions() {
    this.dafabetService.getAllDafabetTransactions()
      .subscribe(res => {
        console.log('uptodate transactions >>>', res);
      }, err => {
        console.log('error calling dafabet transaction data', err);
      });
  }
  register() {
    this.router.navigate(['auth/register']);
  }
}
