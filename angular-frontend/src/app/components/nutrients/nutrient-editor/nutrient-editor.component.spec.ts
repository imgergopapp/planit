import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientEditorComponent } from './nutrient-editor.component';

describe('NutrientEditorComponent', () => {
  let component: NutrientEditorComponent;
  let fixture: ComponentFixture<NutrientEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
