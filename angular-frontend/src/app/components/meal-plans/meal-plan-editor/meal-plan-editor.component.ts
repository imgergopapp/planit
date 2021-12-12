import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MealPlanDto } from 'src/app/models/dto/meal-plan-dto';
import { MealPlan } from 'src/app/models/meal-plan';

@Component({
  selector: 'app-meal-plan-editor',
  templateUrl: './meal-plan-editor.component.html',
  styleUrls: ['./meal-plan-editor.component.css'],
})
export class MealPlanEditorComponent implements OnInit {
  @Output() onSaveEvent = new EventEmitter<MealPlan>();

  mealPlanFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MealPlan,
    private formBuilder: FormBuilder
  ) {
    this.mealPlanFormGroup = this.formBuilder.group({
      id: this.data.getId(),
      name: this.data.getName(),
      description: this.data.getDescription(),
      // nutrients: this.data.nutrients,
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    const mealPlanDto: MealPlanDto = new MealPlanDto();
    mealPlanDto.id = this.mealPlanFormGroup.get('id')!.value;
    mealPlanDto.name = this.mealPlanFormGroup.get('name')!.value;
    mealPlanDto.description = this.mealPlanFormGroup.get('description')!.value;
    // mealPlanDto.nutrients = this.mealPlanFormGroup.get('nutrients')!.value;

    this.onSaveEvent.emit(new MealPlan(mealPlanDto));
  }
}
