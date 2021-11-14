import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NutrientDto } from 'src/app/models/nutrient-dto';
import { NutrientService } from 'src/app/services/nutrient.service';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.css'],
})
export class NutrientsComponent implements OnInit {
  constructor(private nutrientService: NutrientService) {}

  dataSource: MatTableDataSource<NutrientDto> = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'amount',
    'kcal',
    'protein',
    'carbohydrate',
    'saturatedFat',
    'unsaturatedFat',
    'sugar',
    'salt',
    'fiber',
    'packageSize',
    'packagePrice',
  ];

  ngOnInit(): void {
    this.nutrientService
      .fetchAll()
      .subscribe((fetchedNutrientDtos: NutrientDto[]) => {
        this.dataSource.data = fetchedNutrientDtos;
      });
  }
}
