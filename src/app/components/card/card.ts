import {Component, input} from '@angular/core';
import {Place} from '../../interfaces/place';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
 readonly placeData = input.required<Place>();
}
