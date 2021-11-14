package com.planit.mealplanner.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FoodType
{
    FISH("Fish"),
    MEAT("Meat"),
    RICE("Rice"),
    PASTA("Pasta"),
    FRUIT("Fruit"),
    SUPPLEMENT("Supplement"),
    DRINK("Drink"),
    SNACK("Snack"),
    CEREAL("Cereal"),
    OTHER("Other"),
    SAUCE("Sauce"),
    VEGETABLE("Vegetable");

    private String name;
}
