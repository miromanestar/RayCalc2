import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewPage } from './dataview.page';

describe('DataviewPage', () => {
  let component: DataviewPage;
  let fixture: ComponentFixture<DataviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
