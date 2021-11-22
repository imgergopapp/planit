import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanEditorComponent } from './meal-plan-editor.component';

describe('MealPlanEditorComponent', () => {
  let component: MealPlanEditorComponent;
  let fixture: ComponentFixture<MealPlanEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealPlanEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
