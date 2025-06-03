import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-addplaces',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './addplaces.html',
  styleUrl: './addplaces.css'
})
export class Addplaces {
  fb = inject(FormBuilder);

  placeForm = this.fb.group({
    imageControl: [''],
    titleControl: [''],
    categoryControl: [''],
    descriptionControl: [''],
    locationControl: [''],
  })

  logValues(): void {
    console.log(this.placeForm.value);

    this.placeForm.reset();
  }
}
