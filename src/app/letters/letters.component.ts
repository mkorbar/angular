import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letters.component.html',
  styleUrl: './letters.component.css'
})
export class LettersComponent {
  @Output() selectLetter = new EventEmitter()

  letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  
  onClick(_t4: string) {
    throw new Error('Method not implemented.');
  }
}

