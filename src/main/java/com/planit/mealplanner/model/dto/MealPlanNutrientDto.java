package com.planit.mealplanner.model.dto;

import com.planit.mealplanner.model.entity.Nutrient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealPlanNutrientDto
{
    private Integer amount;

    private NutrientDto nutrient;
}
