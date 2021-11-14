package com.planit.mealplanner.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "meal_plan")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MealPlan
{
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "mealPlan")
    private Set<MealPlanNutrient> mealPlanNutrient = new HashSet<>();
}
