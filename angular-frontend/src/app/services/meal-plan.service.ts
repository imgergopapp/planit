import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MealPlanDto } from '../models/dto/meal-plan-dto';

@Injectable({
  providedIn: 'root',
})
export class MealPlanService {
  private readonly backendUrl = environment.apiUrl;

  constructor(private httpService: HttpClient) {}

  fetchAll(): Observable<MealPlanDto[]> {
    return this.httpService.get<MealPlanDto[]>(
      `${this.backendUrl}/meal-planner/meal-plans`
    );
  }

  addNew(newMealPlanDto: MealPlanDto): Observable<MealPlanDto> {
    return this.httpService.post<MealPlanDto>(
      `${this.backendUrl}/meal-planner/meal-plans`,
      newMealPlanDto
    );
  }

  edit(editedMealPlanDto: MealPlanDto): Observable<MealPlanDto> {
    return this.httpService.put<MealPlanDto>(
      `${this.backendUrl}/meal-planner/meal-plans`,
      editedMealPlanDto
    );
  }

  delete(deletableMealPlanDto: MealPlanDto) {
    return this.httpService.delete(
      `${this.backendUrl}/meal-planner/meal-plans/${deletableMealPlanDto.id}`
    );
  }
}
