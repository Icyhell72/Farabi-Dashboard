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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink,
    AngularSvgIconModule, NgClass, NgIf, ButtonComponent,
    CommonModule,RouterModule,HttpClientModule],
    providers: [AdminService],
})
export class ForgotPasswordComponent {

  passwordResetSent = false; // Add this variable

  constructor(private _route: Router, private _service: AdminService) {}

  tologin() {
    this._route.navigate(['auth/sign-in']);
  }

  resetpw(data: NgForm) {
    const email = data.value.email;
    this._service.resetPassword(email).subscribe(
      () => {
        // Password reset successful
        if (!this.passwordResetSent) {
          this.passwordResetSent = true;
          // Add a delay of 2 seconds before navigating
          setTimeout(() => {
            this.tologin(); // Navigate to sign-in page
          }, 2000);
        }
      },
      (error) => {
        console.error('Error resetting password:', error);
      }
    );
  }
}
