import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesFormComponent } from './names-form.component';

describe('NamesFormComponent', () => {
  let component: NamesFormComponent;
  let fixture: ComponentFixture<NamesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NamesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
