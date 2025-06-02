import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addplaces } from './addplaces';

describe('Addplaces', () => {
  let component: Addplaces;
  let fixture: ComponentFixture<Addplaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addplaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addplaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
