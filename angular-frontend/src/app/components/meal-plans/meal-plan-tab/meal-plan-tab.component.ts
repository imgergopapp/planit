import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MealPlanDto } from 'src/app/models/dto/meal-plan-dto';
import { MealPlanNutrientDto } from 'src/app/models/dto/meal-plan-nutrient-dto';
import { NutrientDto } from 'src/app/models/dto/nutrient-dto';
import { NutrientService } from 'src/app/services/nutrient.service';

@Component({
  selector: 'app-meal-plan-tab',
  templateUrl: './meal-plan-tab.component.html',
  styleUrls: ['./meal-plan-tab.component.css'],
})
export class MealPlanTabComponent implements OnInit {
  @Input() data!: MealPlanDto;

  selectedRow!: MealPlanNutrientDto;

  nutrients!: NutrientDto[];

  dataSource: MatTableDataSource<MealPlanNutrientDto> =
    new MatTableDataSource();

  displayedColumns: string[] = [
    'amount',
    'id',
    'name',
    'type',
    'kcal',
    'protein',
    'carbohydrate',
    'saturatedFat',
    'unsaturatedFat',
    'sugar',
    'salt',
    'fiber',
    'packageSize',
    'packagePrice',
  ];

  selected = undefined;

  constructor(
    private nutrientService: NutrientService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.nutrientService.fetchAll().subscribe((nutrientDtos: NutrientDto[]) => {
      this.nutrients = nutrientDtos;
    });
  }

  updateAmount(
    amount: number,
    mealPlanNutrientDto: MealPlanNutrientDto
  ): number {
    return (
      (amount / mealPlanNutrientDto.nutrient.amount) *
      mealPlanNutrientDto.amount
    );
  }

  onRowSelection(selectedRow: MealPlanNutrientDto) {
    this.selectedRow = selectedRow;
  }

  onSubmit(): void {
    const newElement: MealPlanNutrientDto = new MealPlanNutrientDto();
    newElement.amount = 200;
    newElement.nutrient = this.selected!;
    this.data.nutrients.push(newElement);
    this.dataSource.data = this.data.nutrients;
    // Process checkout data here
    console.warn('Your order has been submitted', this.selected);
  }

  calculateTotal(amountSupplier: () => number): number {
    return this.dataSource.data.map(() => amountSupplier()).reduce(this.add, 0);
  }

  add(accumulator: number, a: number): number {
    return accumulator + a;
  }
}
