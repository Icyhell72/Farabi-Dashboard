import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink , RouterModule } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AdminService } from 'src/app/service/admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink,
    AngularSvgIconModule, NgClass, NgIf, ButtonComponent,
    CommonModule,RouterModule,HttpClientModule],
    providers: [AdminService],
})
export class SignInComponent  {
  affiche: boolean = false;
  toastStatus: boolean = false;
  msg: string = 'Votre compte a été crée avec succès';
  showLogin: boolean = false;

  constructor(private _route: Router, private _service: AdminService) {}

  showLoginSpace() {
    this.showLogin = true;
  }


  forgetpw() {
    this._route.navigate(['auth/forgot-password']);
  }

  connect() {
    console.log("Navigating to dashboard...");
    this._route.navigate(['dashboard/nfts']);
  }

  onLogin(data: NgForm) {
    console.log("Login data:", data.value);
    this._service.login(data.value).subscribe({
      next: (result) => {
        console.log("Login result:", result);
        if (result.state) {
         
        } else {
          this.msg = 'votre email ou mot de passe est incorrect';
          this.toastStatus = true;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
    setTimeout(() => {
      this.toastStatus = false;
    }, 2500);
    this.connect();
  }

  test(login: NgForm) {
    console.log('test');
  }
}