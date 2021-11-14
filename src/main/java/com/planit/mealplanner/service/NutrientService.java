package com.planit.mealplanner.service;

import com.planit.mealplanner.model.dto.NutrientDto;
import com.planit.mealplanner.model.entity.Nutrient;
import com.planit.mealplanner.repository.MealPlanNutrientRepository;
import com.planit.mealplanner.repository.MealPlanRepository;
import com.planit.mealplanner.repository.NutrientRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NutrientService
{
    private final NutrientRepository nutrientRepository;

    private final ModelMapper modelMapper;
    

    @Autowired
    public NutrientService(final NutrientRepository nutrientRepository)
    {
		this.nutrientRepository = nutrientRepository;
		
		this.modelMapper = new ModelMapper();
	}


    public List<Nutrient> findAll()
    {
        return nutrientRepository.findAll();
    }


    public void deleteById(Integer id)
    {
        nutrientRepository.deleteById(id);
    }


    public Nutrient save(Nutrient savable)
    {
        return nutrientRepository.save(savable);
    }


    public Nutrient dtoToEntity(NutrientDto nutrientDto)
    {
        return  modelMapper.map(nutrientDto, Nutrient.class);
    }

    public NutrientDto entityToDto(Nutrient nutrient)
    {
        return modelMapper.map(nutrient, NutrientDto.class);
    }

    public List<NutrientDto> entitiesToDtos(Collection<Nutrient> nutrients)
    {
        return nutrients.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }
}
