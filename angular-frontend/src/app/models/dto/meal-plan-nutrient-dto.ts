import { NutrientDto } from './nutrient-dto';

export class MealPlanNutrientDto {
  id!: number;

  amount!: number;

  nutrient!: NutrientDto;
}
