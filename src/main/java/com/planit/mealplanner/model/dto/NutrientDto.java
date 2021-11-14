package com.planit.mealplanner.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NutrientDto
{
    private Integer id;

    private String name;
    private String type;
    private Integer amount;
    private Double kcal;
    private Double protein;
    private Double carbohydrate;
    private Double saturatedFat;
    private Double unsaturatedFat;
    private Double sugar;
    private Double salt;
    private Double fiber;
    private Double packageSize;
    private BigDecimal packagePrice;
}
