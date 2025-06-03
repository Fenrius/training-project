import {Component, input} from '@angular/core';
import {Place} from '../../interfaces/place';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [
    RouterLink
  ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
 readonly placeData = input.required<Place>();
}
