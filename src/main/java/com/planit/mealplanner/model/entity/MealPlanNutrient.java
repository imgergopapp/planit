package com.planit.mealplanner.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "meal_plan_nutrient")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MealPlanNutrient
{
    @Id
    @GeneratedValue
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "meal_plan", referencedColumnName = "id")
    private MealPlan mealPlan;

    @ManyToOne
    @JoinColumn(name = "nutrient", referencedColumnName = "id")
    private Nutrient nutrient;

    @Column(name = "amount")
    private Integer amount;
}