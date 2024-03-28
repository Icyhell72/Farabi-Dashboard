import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss'
})
export class AddAdminComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';

  nomError: string | null = null;
  prenomError: string | null = null;
  emailError: string | null = null;

  currentImageIndex: number = 0;
  imageSources: string[] = [
    'assets/images/bg-img01.jpg',
    'assets/images/bg-img02.jpg',
    'assets/images/bg-img03.jpg'
  ];

  constructor() {}

  getImageSource(): string {
    return this.imageSources[this.currentImageIndex];
  }


  
  validateNom() {
    if (/[^a-zA-Z]/.test(this.nom)) {
      this.nomError = 'Veuillez saisir un nom valide (caractères uniquement).';
    } else {
      this.nomError = null;
    }
  }

  validatePrenom() {
    if (/[^a-zA-Z]/.test(this.prenom)) {
      this.prenomError = 'Veuillez saisir un prénom valide (caractères uniquement).';
    } else {
      this.prenomError = null;
    }
  }

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.emailError = 'Veuillez saisir une adresse e-mail valide.';
    } else {
      this.emailError = null;
    }
  }


  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
    }, 2000);
  }

}
