import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NutrientDto } from 'src/app/models/dto/nutrient-dto';
import { NutrientService } from 'src/app/services/nutrient.service';
import { NutrientEditorComponent } from './nutrient-editor/nutrient-editor.component';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.component.html',
  styleUrls: ['./nutrients.component.css'],
})
export class NutrientsComponent implements OnInit {
  selectedRow!: NutrientDto;

  constructor(
    private nutrientService: NutrientService,
    public dialog: MatDialog
  ) {}

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

  onAddNew(): void {
    const dialogRef = this.dialog.open(NutrientEditorComponent, {
      data: new NutrientDto(),
    });

    dialogRef.componentInstance.onSaveEvent.subscribe(
      (newNutriendDto: NutrientDto) =>
        this.nutrientService
          .addNew(newNutriendDto)
          .subscribe((newPersistedNutrient: NutrientDto) => {
            const data: NutrientDto[] = this.dataSource.data;
            data.push(newPersistedNutrient);
            this.dataSource.data = data;
          })
    );
  }

  onRowSelection(selectedRow: NutrientDto) {
    this.selectedRow = selectedRow;
  }

  onEdit(): void {
    const dialogRef = this.dialog.open(NutrientEditorComponent, {
      data: this.selectedRow,
    });

    dialogRef.componentInstance.onSaveEvent.subscribe(
      (newNutriendDto: NutrientDto) =>
        this.nutrientService
          .addNew(newNutriendDto)
          .subscribe((persistedEditedNutrient: NutrientDto) => {
            const data: NutrientDto[] = this.dataSource.data;
            const indexOfEditedRow: number = data.indexOf(this.selectedRow);
            data.splice(indexOfEditedRow, 1);
            data.push(persistedEditedNutrient);
            this.dataSource.data = data;
          })
    );
  }

  onDelete(): void {
    this.nutrientService.delete(this.selectedRow).subscribe(() => {
      const data: NutrientDto[] = this.dataSource.data;
      const indexOfEditedRow: number = data.indexOf(this.selectedRow);
      data.splice(indexOfEditedRow, 1);
      this.dataSource.data = data;
    });
  }
}
