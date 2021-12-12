import { MealPlanNutrientDto } from './dto/meal-plan-nutrient-dto';
import { Nutrient } from './nutrient';

export class MealPlanNutrient {
  amount: number;

  private nutrient: Nutrient;
  private id: number;

  constructor(dto: MealPlanNutrientDto) {
    this.id = dto.id;
    this.amount = dto.amount;
    this.nutrient = new Nutrient(dto.nutrient);
  }

  getAmount(): number {
    return this.amount;
  }

  getNutrient(): Nutrient {
    return this.nutrient;
  }

  getId(): number {
    return this.id;
  }
}
