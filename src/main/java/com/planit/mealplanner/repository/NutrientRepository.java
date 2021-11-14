package com.planit.mealplanner.repository;

import com.planit.mealplanner.model.entity.Nutrient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NutrientRepository extends JpaRepository<Nutrient, Integer>
{

}
