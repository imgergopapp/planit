import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NutrientDto } from 'src/app/models/dto/nutrient-dto';

@Component({
  selector: 'app-nutrient-editor',
  templateUrl: './nutrient-editor.component.html',
  styleUrls: ['./nutrient-editor.component.css'],
})
export class NutrientEditorComponent implements OnInit {
  @Output() onSaveEvent = new EventEmitter<NutrientDto>();

  nutrientFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NutrientDto,
    private formBuilder: FormBuilder
  ) {
    this.nutrientFormGroup = this.formBuilder.group({
      id: this.data.id,
      name: this.data.name,
      type: this.data.type,
      amount: this.data.amount,
      kcal: this.data.kcal,
      protein: this.data.protein,
      carbohydrate: this.data.carbohydrate,
      saturatedFat: this.data.saturatedFat,
      unsaturatedFat: this.data.unsaturatedFat,
      sugar: this.data.sugar,
      salt: this.data.salt,
      fiber: this.data.fiber,
      packageSize: this.data.packageSize,
      packagePrice: this.data.packagePrice,
    });
  }

  ngOnInit(): void {}

  onSave(): void {
    const nutrientDto: NutrientDto = new NutrientDto();
    nutrientDto.id = this.nutrientFormGroup.get('id')!.value;
    nutrientDto.name = this.nutrientFormGroup.get('name')!.value;
    nutrientDto.type = this.nutrientFormGroup.get('type')!.value;
    nutrientDto.amount = this.nutrientFormGroup.get('amount')!.value;
    nutrientDto.kcal = this.nutrientFormGroup.get('kcal')!.value;
    nutrientDto.protein = this.nutrientFormGroup.get('protein')!.value;
    nutrientDto.carbohydrate =
      this.nutrientFormGroup.get('carbohydrate')!.value;
    nutrientDto.saturatedFat =
      this.nutrientFormGroup.get('saturatedFat')!.value;
    nutrientDto.unsaturatedFat =
      this.nutrientFormGroup.get('unsaturatedFat')!.value;
    nutrientDto.sugar = this.nutrientFormGroup.get('sugar')!.value;
    nutrientDto.salt = this.nutrientFormGroup.get('salt')!.value;
    nutrientDto.fiber = this.nutrientFormGroup.get('fiber')!.value;
    nutrientDto.packageSize = this.nutrientFormGroup.get('packageSize')!.value;
    nutrientDto.packagePrice =
      this.nutrientFormGroup.get('packagePrice')!.value;

    this.onSaveEvent.emit(nutrientDto);
  }
}
