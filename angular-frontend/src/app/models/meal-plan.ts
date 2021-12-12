import { MealPlanDto } from './dto/meal-plan-dto';
import { MealPlanNutrientDto } from './dto/meal-plan-nutrient-dto';
import { MealPlanNutrient } from './meal-plan-nutrient';

export class MealPlan {
  private id: number;

  private name: string;

  private description: string;

  private nutrients: MealPlanNutrient[];

  constructor(dto: MealPlanDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.description = dto.description;
    if (dto.nutrients)
    {
      this.nutrients = dto.nutrients.map(
        (mealPlanNutrientDto: MealPlanNutrientDto) =>
          new MealPlanNutrient(mealPlanNutrientDto)
      );
    }
    else
        this.nutrients = [];

  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getNutrients(): MealPlanNutrient[] {
    return this.nutrients;
  }
}
