import { MealPlanNutrientDto } from './meal-plan-nutrient-dto';

export class MealPlanDto {
  id!: number;

  name!: string;

  description!: string;

  nutrients!: MealPlanNutrientDto[];
}
