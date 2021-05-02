import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowPartsComponent } from './cow-parts.component';

describe('CowPartsComponent', () => {
  let component: CowPartsComponent;
  let fixture: ComponentFixture<CowPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
