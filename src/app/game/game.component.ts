import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';
import { ImageComponent } from '../image/image.component';
import { LettersComponent } from '../letters/letters.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ImageComponent, LettersComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {

  
  secretWord = '';

  constructor(private words: WordsService) {}

  ngOnInit(): void {
    this.secretWord = this.words.getWord();
  }

  logKeypress(key:any){
    console.log(key);
    
  }
}
