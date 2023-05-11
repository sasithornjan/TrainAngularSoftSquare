import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PparentComponent } from './pparent.component';

describe('PparentComponent', () => {
  let component: PparentComponent;
  let fixture: ComponentFixture<PparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
