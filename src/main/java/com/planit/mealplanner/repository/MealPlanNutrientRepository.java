package com.planit.mealplanner.repository;

import com.planit.mealplanner.model.entity.MealPlanNutrient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealPlanNutrientRepository extends JpaRepository<MealPlanNutrient, Integer>
{
    List<MealPlanNutrient> findAllByMealPlanId(Integer id);
}
