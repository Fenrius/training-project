import {Component, inject} from '@angular/core';
import {Card} from '../../components/card/card';
import {Place} from '../../interfaces/place';
import {PlaceService} from '../../services/place-service';

@Component({
  selector: 'app-startpage',
  imports: [
    Card
  ],
  templateUrl: './startpage.html',
  styleUrl: './startpage.css'
})
export class Startpage {
  placeService = inject(PlaceService);

  placeData = this.placeService.getAllPlaces();
}
