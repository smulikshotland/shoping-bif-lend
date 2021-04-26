import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteShoppingComponent } from './note-shopping.component';

describe('NoteShoppingComponent', () => {
  let component: NoteShoppingComponent;
  let fixture: ComponentFixture<NoteShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
