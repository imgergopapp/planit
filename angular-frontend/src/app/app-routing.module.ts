import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealPlansComponent } from './components/meal-plans/meal-plans.component';
import { NutrientsComponent } from './components/nutrients/nutrients.component';
import { WeightStatsComponent } from './components/weight-stats/weight-stats.component';

const routes: Routes = [
  { path: 'nutrients', component: NutrientsComponent },
  { path: 'mealplans', component: MealPlansComponent },
  { path: 'weight-stats', component: WeightStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
