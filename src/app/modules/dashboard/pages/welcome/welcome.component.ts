import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  currentImageIndex: number = 0;
  imageSources: string[] = [
    'assets/images/bg-img01.jpg',
    'assets/images/bg-img02.jpg'
  ];

  constructor( private _route: Router ) {}

  getImageSource(): string {
    return this.imageSources[this.currentImageIndex];
  }

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
    }, 2000);
  }

  navigatetohome() {
    this._route.navigate(['dashboard/nfts']);
  }

  connect() {
    this._route.navigate(['auth/sign-in']);
  }

}
