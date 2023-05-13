/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecComponent } from './rec.component';

describe('RecComponent', () => {
  let component: RecComponent;
  let fixture: ComponentFixture<RecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
