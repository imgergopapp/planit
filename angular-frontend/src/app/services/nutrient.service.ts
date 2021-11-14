import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NutrientDto } from '../models/nutrient-dto';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  private readonly backendUrl = 'http://localhost:8080';

  constructor(private httpService: HttpClient) {}

  fetchAll(): Observable<NutrientDto[]> {
    return this.httpService.get<NutrientDto[]>(
      `${this.backendUrl}/meal-planner/nutrients`
    );
  }
}
