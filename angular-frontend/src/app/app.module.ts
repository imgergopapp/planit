import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NutrientsComponent } from './components/nutrients/nutrients.component';
import { MealPlansComponent } from './components/meal-plans/meal-plans.component';
import { NutrientEditorComponent } from './components/nutrients/nutrient-editor/nutrient-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MealPlanEditorComponent } from './components/meal-plans/meal-plan-editor/meal-plan-editor.component';
import { MealPlanTabComponent } from './components/meal-plans/meal-plan-tab/meal-plan-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    NutrientsComponent,
    MealPlansComponent,
    NutrientEditorComponent,
    MealPlanEditorComponent,
    MealPlanTabComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
