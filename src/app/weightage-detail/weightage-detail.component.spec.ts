import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightageDetailComponent } from './weightage-detail.component';

describe('WeightageDetailComponent', () => {
  let component: WeightageDetailComponent;
  let fixture: ComponentFixture<WeightageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightageDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
