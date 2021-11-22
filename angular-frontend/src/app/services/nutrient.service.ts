import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NutrientDto } from '../models/dto/nutrient-dto';

@Injectable({
  providedIn: 'root',
})
export class NutrientService {
  private readonly backendUrl = environment.apiUrl;

  constructor(private httpService: HttpClient) {}

  fetchAll(): Observable<NutrientDto[]> {
    return this.httpService.get<NutrientDto[]>(
      `${this.backendUrl}/meal-planner/nutrients`
    );
  }

  addNew(newNutrientDto: NutrientDto): Observable<NutrientDto> {
    return this.httpService.post<NutrientDto>(
      `${this.backendUrl}/meal-planner/nutrients`,
      newNutrientDto
    );
  }

  edit(editedNutrientDto: NutrientDto): Observable<NutrientDto> {
    return this.httpService.put<NutrientDto>(
      `${this.backendUrl}/meal-planner/nutrients`,
      editedNutrientDto
    );
  }

  delete(deletableNutrientDto: NutrientDto) {
    return this.httpService.delete(
      `${this.backendUrl}/meal-planner/nutrients/${deletableNutrientDto.id}`
    );
  }
}
