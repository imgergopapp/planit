package com.planit.mealplanner.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "nutrient")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Nutrient
{
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "kcal")
    private Double kcal;

    @Column(name = "protein")
    private Double protein;

    @Column(name = "carbohydrate")
    private Double carbohydrate;

    @Column(name = "saturated_fat")
    private Double saturatedFat;

    @Column(name = "unsaturatedFat")
    private Double unsaturatedFat;

    @Column(name = "sugar")
    private Double sugar;

    @Column(name = "salt")
    private Double salt;

    @Column(name = "fiber")
    private Double fiber;

    @Column(name = "package_size")
    private Double packageSize;

    @Column(name = "package_price")
    private BigDecimal packagePrice;

    @OneToMany(mappedBy = "nutrient")
    private Set<MealPlanNutrient> mealPlanNutrient = new HashSet<>();
}
