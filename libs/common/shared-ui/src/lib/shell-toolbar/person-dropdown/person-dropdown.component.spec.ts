import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDropdownComponent } from './person-dropdown.component';

describe('PersonDropdownComponent', () => {
  let component: PersonDropdownComponent;
  let fixture: ComponentFixture<PersonDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
