package com.planit.mealplanner.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealPlanNutrientDto
{
    private Integer amount;

    private NutrientDto nutrient;
}
