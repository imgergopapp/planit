package com.planit.mealplanner.repository;

import com.planit.mealplanner.model.entity.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlanRepository extends JpaRepository<MealPlan, Integer>
{

}
