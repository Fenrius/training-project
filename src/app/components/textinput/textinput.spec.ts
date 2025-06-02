import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textinput } from './textinput';

describe('Textinput', () => {
  let component: Textinput;
  let fixture: ComponentFixture<Textinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textinput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textinput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
