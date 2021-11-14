package com.planit.mealplanner.controller;

import com.planit.mealplanner.model.dto.NutrientDto;
import com.planit.mealplanner.model.entity.Nutrient;
import com.planit.mealplanner.service.NutrientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("meal-planner/nutrients")
@CrossOrigin
public class NutrientController
{
    @Autowired
    private NutrientService nutrientService;


    @GetMapping(produces = "application/json")
    public List<NutrientDto> findAll()
    {
        final List<Nutrient> nutrients = nutrientService.findAll();
        return nutrientService.entitiesToDtos(nutrients);
    }


    @PutMapping(produces = "application/json")
    public Nutrient update(@RequestBody NutrientDto nutrientDto)
    {
        final Nutrient nutrient = nutrientService.dtoToEntity(nutrientDto);
        return nutrientService.save(nutrient);
    }


    @PostMapping(produces = "application/json")
    public Nutrient save(@RequestBody NutrientDto nutrientDto)
    {
        final Nutrient nutrient = nutrientService.dtoToEntity(nutrientDto);
        return nutrientService.save(nutrient);
    }


    @DeleteMapping(path = "/{id}", produces = "application/json")
    public void deleteById(@PathVariable Integer id)
    {
        nutrientService.deleteById(id);
    }
}
