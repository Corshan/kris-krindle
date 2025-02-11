import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifteesCardComponent } from './giftees-card.component';

describe('GifteesCardComponent', () => {
  let component: GifteesCardComponent;
  let fixture: ComponentFixture<GifteesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifteesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifteesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
