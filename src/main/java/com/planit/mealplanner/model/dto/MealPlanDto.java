package com.planit.mealplanner.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealPlanDto
{
    private Integer id;

    private String name;

    private String description;

    private List<MealPlanNutrientDto> nutrients;
}
