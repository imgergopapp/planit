package com.planit.mealplanner.controller;

import com.planit.mealplanner.model.dto.MealPlanDto;
import com.planit.mealplanner.model.entity.MealPlan;
import com.planit.mealplanner.service.MealPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("meal-planner/meal-plans")
@CrossOrigin
public class MealPlanController
{
    private final MealPlanService mealPlanService;

    
    @Autowired
    public MealPlanController(MealPlanService mealPlanService)
    {
		this.mealPlanService = mealPlanService;
	}


	@GetMapping(produces = "application/json")
    public List<MealPlanDto> findAll()
    {
        return mealPlanService.findAll();
    }


    @PutMapping(produces = "application/json")
    public MealPlan update(@RequestBody MealPlanDto mealPlanDto)
    {
        return mealPlanService.save(mealPlanDto);
    }


    @PostMapping(produces = "application/json")
    public MealPlan save(@RequestBody MealPlanDto mealPlanDto)
    {
        return mealPlanService.save(mealPlanDto);
    }


    @DeleteMapping(path = "/{id}", produces = "application/json")
    public void deleteById(@PathVariable Integer id)
    {
        mealPlanService.deleteById(id);
    }
}