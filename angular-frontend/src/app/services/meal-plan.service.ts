import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MealPlanDto } from '../models/dto/meal-plan-dto';
import { MealPlan } from '../models/meal-plan';

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

  addNew(newMealPlan: MealPlan): Observable<MealPlanDto> {
    return this.httpService.post<MealPlanDto>(
      `${this.backendUrl}/meal-planner/meal-plans`,
      newMealPlan
    );
  }

  edit(editedMealPlan: MealPlan): Observable<MealPlanDto> {
    console.warn('to update');
    console.warn(editedMealPlan);

    return this.httpService.put<MealPlanDto>(
      `${this.backendUrl}/meal-planner/meal-plans`,
      editedMealPlan
    );
  }

  delete(deletableMealPlanDto: MealPlan) {
    return this.httpService.delete(
      `${this.backendUrl}/meal-planner/meal-plans/${deletableMealPlanDto.getId()}`
    );
  }
}
