import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [
    CommonModule,RouterModule,FormsModule,HttpClientModule
  ],
  providers: [AdminService],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss'
})
export class AddAdminComponent {

  currentImageIndex: number = 0;
  imageSources: string[] = [
    'assets/images/bg-img01.jpg',
    'assets/images/bg-img02.jpg',
    'assets/images/bg-img03.jpg'
  ];
  msg: string = 'Votre compte a été crée avec succès';

  constructor(    private _route: Router,
    private _service: AdminService) {}

  getImageSource(): string {
    return this.imageSources[this.currentImageIndex];
  }

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
    }, 2000);
  }

   registerAdmin(data: NgForm) {
    console.log(data.value);
    
    this._service.registerAdmin(data.value).subscribe({
      next: (result) => {
        if (result) {
          data.reset();
          this.msg = 'Votre compte a été crée avec succès';
        } else {
          this.msg = "Votre compte n'a pas été crée";
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
