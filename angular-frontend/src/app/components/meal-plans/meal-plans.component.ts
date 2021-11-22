import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MealPlanDto } from 'src/app/models/dto/meal-plan-dto';
import { MealPlanService } from 'src/app/services/meal-plan.service';
import { MealPlanEditorComponent } from './meal-plan-editor/meal-plan-editor.component';

@Component({
  selector: 'app-meal-plans',
  templateUrl: './meal-plans.component.html',
  styleUrls: ['./meal-plans.component.css'],
})
export class MealPlansComponent implements OnInit {
  mealPlans!: MealPlanDto[];

  constructor(
    private mealPlanService: MealPlanService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mealPlanService
      .fetchAll()
      .subscribe((fetchedMealPlanDtos: MealPlanDto[]) => {
        this.mealPlans = fetchedMealPlanDtos;
      });
  }

  onAddNew(): void {
    const dialogRef = this.dialog.open(MealPlanEditorComponent, {
      data: new MealPlanDto(),
    });

    dialogRef.componentInstance.onSaveEvent.subscribe(
      (newNutriendDto: MealPlanDto) => {
        this.mealPlanService
          .addNew(newNutriendDto)
          .subscribe((newPersistedNutrient: MealPlanDto) => {
            this.mealPlans.push(newPersistedNutrient);
          });
      }
    );
  }
}
