import { Injectable } from '@angular/core'
import { TotalColumn } from '../models/enums/total-column'
import { MealPlanNutrient } from '../models/meal-plan-nutrient'
import { Nutrient } from '../models/nutrient'

@Injectable({
  providedIn: 'root'
})
export class TotalCalculatorService {

  constructor() { }

  calculateTotal(nutrientRows: MealPlanNutrient[], column: TotalColumn): number {
    return nutrientRows.map((mealPlanNutrient: MealPlanNutrient) => this.columnValue(mealPlanNutrient, column))
      .reduce(this.add, 0);
  }

  private columnValue(dataRow: MealPlanNutrient, column: TotalColumn): number
  {
    const nutrient: Nutrient = dataRow.getNutrient();

    switch(column) {
      default:
      case TotalColumn.Id:
      case TotalColumn.Name:
      case TotalColumn.Type:
        return 0;

      case TotalColumn.Amount:
        return dataRow.getAmount();

      case TotalColumn.Kcal:
        return this.updateAmount(nutrient.getKcal(), dataRow);

      case TotalColumn.Protein:
          return this.updateAmount(nutrient.getProtein(), dataRow);

      case TotalColumn.Carbohydrate:
          return this.updateAmount(nutrient.getCarbohydrate(), dataRow);

      case TotalColumn.SaturatedFat:
        return this.updateAmount(nutrient.getSaturatedFat(), dataRow);

      case TotalColumn.UnsaturatedFat:
        return this.updateAmount(nutrient.getUnsaturatedFat(), dataRow);

      case TotalColumn.Sugar:
        return this.updateAmount(nutrient.getSugar(), dataRow);

      case TotalColumn.Salt:
          return this.updateAmount(nutrient.getSalt(), dataRow);

      case TotalColumn.Fiber:
        return this.updateAmount(nutrient.getFiber(), dataRow);
        
      case TotalColumn.PackageSize:
        return this.updateAmount(nutrient.getPackageSize(), dataRow);

      case TotalColumn.PackagePrice:
        return this.updateAmount(nutrient.getPackagePrice(), dataRow);
    }
  }

  private updateAmount(amount: number, MealPlanNutrient: MealPlanNutrient): number {
    const result: number =  (amount / MealPlanNutrient.getNutrient().getAmount()) *
      MealPlanNutrient.getAmount();

    return Math.floor(result);

  }

  private add(accumulator: number, a: number): number {
    return accumulator + a;
  }
}
