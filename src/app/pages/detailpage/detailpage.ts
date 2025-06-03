import {Component, computed, inject, signal} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailpage',
  imports: [],
  templateUrl: './detailpage.html',
  styleUrl: './detailpage.css'
})
export class Detailpage {
  route = inject(ActivatedRoute);
  placeService = inject(PlaceService);

  id = signal<number>(Number(this.route.snapshot.paramMap.get('id')));

  readonly place = computed(() => {
    const id = this.id();
    return this.placeService.getPlaceById(id);
  });
}
