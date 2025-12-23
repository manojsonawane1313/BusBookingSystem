import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBookComponent } from './seat-book.component';

describe('SeatBookComponent', () => {
  let component: SeatBookComponent;
  let fixture: ComponentFixture<SeatBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeatBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
