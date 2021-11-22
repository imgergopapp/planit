import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MealPlanDto } from 'src/app/models/meal-plan-dto';

@Component({
  selector: 'app-meal-plan-editor',
  templateUrl: './meal-plan-editor.component.html',
  styleUrls: ['./meal-plan-editor.component.css'],
})
export class MealPlanEditorComponent implements OnInit {
  @Output() onSaveEvent = new EventEmitter<MealPlanDto>();

  mealPlanFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MealPlanDto,
    private formBuilder: FormBuilder
  ) {
    this.mealPlanFormGroup = this.formBuilder.group({
      id: this.data.id,
      name: this.data.name,
      description: this.data.description,
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

    this.onSaveEvent.emit(mealPlanDto);
  }
}
