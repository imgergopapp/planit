package com.planit.mealplanner.service;

import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableSetMultimap;
import com.google.common.collect.MoreCollectors;
import com.planit.mealplanner.model.dto.MealPlanDto;
import com.planit.mealplanner.model.dto.MealPlanNutrientDto;
import com.planit.mealplanner.model.dto.NutrientDto;
import com.planit.mealplanner.model.entity.MealPlan;
import com.planit.mealplanner.model.entity.MealPlanNutrient;
import com.planit.mealplanner.repository.MealPlanNutrientRepository;
import com.planit.mealplanner.repository.MealPlanRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class MealPlanService
{
    private final MealPlanRepository mealPlanRepository;
    private final MealPlanNutrientRepository mealPlanNutrientRepository;
    
    private final NutrientService nutrientService;

    private final ModelMapper modelMapper;

    @Autowired
    public MealPlanService(
    		final MealPlanRepository mealPlanRepository,
    		final NutrientService nutrientService,
    		final MealPlanNutrientRepository mealPlanNutrientRepository)
    {
		this.mealPlanRepository = mealPlanRepository;
		this.mealPlanNutrientRepository = mealPlanNutrientRepository;
		this.nutrientService = nutrientService;
		
		this.modelMapper = new ModelMapper();
	}
    
    public List<MealPlanDto> findAll()
    {
        return mealPlanRepository.findAll()
                .stream()
                .map(mealPlan -> createMealPlanDto(mealPlan))
                .collect(Collectors.toList());
    }

    private MealPlanDto createMealPlanDto(final MealPlan mealPlan)
	{
	    final ImmutableList<MealPlanNutrientDto> mealPlanNutrientDtos = mealPlanNutrientRepository.findAllByMealPlanId(mealPlan.getId())
	            .stream()
	            .map(mealPlanNutrientDto -> MealPlanNutrientDto.builder()
	                    .nutrient(nutrientService.entityToDto(mealPlanNutrientDto.getNutrient()))
	                    .amount(mealPlanNutrientDto.getAmount())
	                    .build())
	            .collect(ImmutableList.toImmutableList());
	
	    return MealPlanDto.builder()
	            .id(mealPlan.getId())
	            .description(mealPlan.getDescription())
	            .name(mealPlan.getName())
	            .nutrients(mealPlanNutrientDtos)
	            .build();
	}

	public MealPlanDto findById(int id)
    {
        final MealPlan mealPlan = mealPlanRepository.findById(id).orElseThrow(NoSuchElementException::new);

        return createMealPlanDto(mealPlan);
    }


    public void deleteById(Integer id)
    {
        mealPlanRepository.deleteById(id);
    }


    public MealPlan save(MealPlan savable)
    {
        return mealPlanRepository.save(savable);
    }


    public MealPlan dtoToEntity(MealPlanDto mealPlanDto)
    {
        return  modelMapper.map(mealPlanDto, MealPlan.class);
    }


    public List<MealPlanDto> entitiesToDtos(Collection<MealPlan> mealPlans)
    {
        return mealPlans.stream()
                .map(entity -> modelMapper.map(entity, MealPlanDto.class))
                .collect(Collectors.toList());
    }
}
