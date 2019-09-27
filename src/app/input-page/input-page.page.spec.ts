import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPagePage } from './input-page.page';

describe('InputPagePage', () => {
  let component: InputPagePage;
  let fixture: ComponentFixture<InputPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
