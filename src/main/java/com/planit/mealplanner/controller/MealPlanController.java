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
    @Autowired
    private MealPlanService mealPlanService;


    @GetMapping(produces = "application/json")
    public List<MealPlanDto> findAll()
    {
        return mealPlanService.findAll();
    }


    @PutMapping(produces = "application/json")
    public MealPlan update(@RequestBody MealPlanDto mealPlanDto)
    {
        final MealPlan mealPlan = mealPlanService.dtoToEntity(mealPlanDto);
        return mealPlanService.save(mealPlan);
    }


    @PostMapping(produces = "application/json")
    public MealPlan save(@RequestBody MealPlanDto mealPlanDto)
    {
        final MealPlan mealPlan = mealPlanService.dtoToEntity(mealPlanDto);
        return mealPlanService.save(mealPlan);
    }


    @DeleteMapping(path = "/{id}", produces = "application/json")
    public void deleteById(@PathVariable Integer id)
    {
        mealPlanService.deleteById(id);
    }
}