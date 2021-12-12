import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MealPlanNutrientDto } from 'src/app/models/dto/meal-plan-nutrient-dto';
import { NutrientDto } from 'src/app/models/dto/nutrient-dto';
import { TotalColumn } from 'src/app/models/enums/total-column';
import { MealPlan } from 'src/app/models/meal-plan';
import { MealPlanNutrient } from 'src/app/models/meal-plan-nutrient';
import { Nutrient } from 'src/app/models/nutrient';
import { MealPlanService } from 'src/app/services/meal-plan.service';
import { NutrientService } from 'src/app/services/nutrient.service';
import { TotalCalculatorService } from 'src/app/services/total-calculator.service';

@Component({
  selector: 'app-meal-plan-tab',
  templateUrl: './meal-plan-tab.component.html',
  styleUrls: ['./meal-plan-tab.component.css'],
})
export class MealPlanTabComponent implements OnInit {
  @Input() data!: MealPlan;
  @Output() onDeleteMealPlanEvent: EventEmitter<MealPlan> = new EventEmitter();


  selectedRow!: MealPlanNutrient;

  nutrients!: Nutrient[];

  dataSource: MatTableDataSource<MealPlanNutrient> = new MatTableDataSource();

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
    private mealPlanService: MealPlanService,
    private totalCalculatorService: TotalCalculatorService) {}

  ngOnInit(): void {
    this.nutrientService.fetchAll().subscribe((nutrientDtos: NutrientDto[]) => {
      this.nutrients = nutrientDtos.map(
        (dto: NutrientDto) => new Nutrient(dto)
      );
    });

    this.dataSource.data = this.data.getNutrients();
  }

  updateAmount(amount: number, MealPlanNutrient: MealPlanNutrient): number {
   const result: number = (amount / MealPlanNutrient.getNutrient().getAmount()) *
      MealPlanNutrient.getAmount();

    return Math.round((result + Number.EPSILON) * 100) / 100;
  }

  onRowSelection(selectedRow: MealPlanNutrient) {
    this.selectedRow = selectedRow;
  }

  onSubmit(): void {
    const dto: MealPlanNutrientDto = new MealPlanNutrientDto();
    dto.amount = 100;
    dto.nutrient = this.selected!;

    const newElement: MealPlanNutrient = new MealPlanNutrient(dto);

    this.data.getNutrients().push(newElement);
    this.dataSource.data = this.data.getNutrients();
  }

  onSave() {
    this.mealPlanService.edit(this.data).subscribe();
  }

  onDelete() {
    this.onDeleteMealPlanEvent.emit(this.data);
    // this.mealPlanService.delete(this.data).subscribe();
  }

  onRemoveNutrient() {
    this.nutrientService.removeMealPlanNutrient(this.selectedRow).subscribe(() => {
      const data: MealPlanNutrient[] = this.dataSource.data;
      const indexOfRemovable: number = data.indexOf(this.selectedRow);

      data.splice(indexOfRemovable, 1);
      this.dataSource.data = data;
    })
  }

  calculateTotal(column: TotalColumn): number
  {
    return this.totalCalculatorService.calculateTotal(this.dataSource.data, column);
  }

  totalColumns(): typeof TotalColumn
  {
    return TotalColumn;
  }
}
