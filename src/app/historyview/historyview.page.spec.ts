import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryviewPage } from './historyview.page';

describe('HistoryviewPage', () => {
  let component: HistoryviewPage;
  let fixture: ComponentFixture<HistoryviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
