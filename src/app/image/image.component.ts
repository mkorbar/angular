import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input() imageId = 0;
  src:string = `/assets/hangman_0.png`;

  clickImage() {
    this.imageId +=1;

    if(this.imageId > 9) {
      this.imageId = 0;
    }

    this.src = `/assets/hangman_${this.imageId}.png`
  }
}
