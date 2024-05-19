import { Component } from '@angular/core';

@Component({
  selector: 'app-add-operator',
  standalone: true,
  imports: [],
  templateUrl: './add-operator.component.html',
  styleUrl: './add-operator.component.scss'
})
export class AddOperatorComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';

  nomError: string | null = null;
  prenomError: string | null = null;
  emailError: string | null = null;

  currentImageIndex: number = 0;
  imageSources: string[] = [
    'assets/images/bg-img01.jpg',
    'assets/images/bg-img03.jpg'
  ];

  constructor() {}

  getImageSource(): string {
    return this.imageSources[this.currentImageIndex];
  }
  
  generateOperatorCode() {
    // Generate a random 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000);
    
    // Set the generated code to the input field
    const operatorCodeInput = document.getElementById('operatorCode') as HTMLInputElement;
    if (operatorCodeInput) {
      operatorCodeInput.value = code.toString();
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageSources.length;
    }, 2000);
  }

}
