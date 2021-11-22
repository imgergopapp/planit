import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanTabComponent } from './meal-plan-tab.component';

describe('MealPlanTabComponent', () => {
  let component: MealPlanTabComponent;
  let fixture: ComponentFixture<MealPlanTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
