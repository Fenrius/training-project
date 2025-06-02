import { Component } from '@angular/core';
import {Card} from '../../components/card/card';
import {Place} from '../../interfaces/place';

@Component({
  selector: 'app-startpage',
  imports: [
    Card
  ],
  templateUrl: './startpage.html',
  styleUrl: './startpage.css'
})
export class Startpage {
 placeData: Place[] = [
   {
     id: 1,
     image: {url:'my/super/image.jpg', alt: 'my fancy image'},
     title: 'My fancy place',
     categories: ['category1', 'category2'],
     description: 'This is my fancy place',
     location: {
      text: 'My fancy location',
     },
     favorite: false
   },
   {
     id: 2,
     image: {url:'my/super/image2.jpg', alt: 'my nice image'},
     title: 'My nice place',
     categories: ['category3', 'category2', 'category1'],
     description: 'This is my nice place',
     location: {
       text: 'My nice location',
     },
     favorite: true
   },
   {
     id: 3,
     image: {url:'my/super/image3.jpg', alt: 'my great image'},
     title: 'My great place',
     categories: ['category3'],
     description: 'This is my great place',
     location: {
       text: 'My great location',
       lat: 123,
       lng: 456,
     },
     favorite: true
   },
 ]
}
