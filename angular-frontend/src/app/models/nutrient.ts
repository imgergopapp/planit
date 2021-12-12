import { NutrientDto } from './dto/nutrient-dto';

export class Nutrient {
  private id: number;

  private name: string;
  private type: string;
  private amount: number;
  private kcal: number;
  private protein: number;
  private carbohydrate: number;
  private saturatedFat: number;
  private unsaturatedFat: number;
  private sugar: number;
  private salt: number;
  private fiber: number;
  private packageSize: number;
  private packagePrice: number;

  constructor(dto: NutrientDto) {
    this.id = dto.id;

    this.name = dto.name;
    this.type = dto.type;
    this.amount = dto.amount;
    this.kcal = dto.kcal;
    this.protein = dto.protein;
    this.carbohydrate = dto.carbohydrate;
    this.saturatedFat = dto.saturatedFat;
    this.unsaturatedFat = dto.unsaturatedFat;
    this.sugar = dto.sugar;
    this.salt = dto.salt;
    this.fiber = dto.fiber;
    this.packageSize = dto.packageSize;
    this.packagePrice = dto.packagePrice;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getType(): string {
    return this.type;
  }

  getAmount(): number {
    return this.amount;
  }

  getKcal(): number {
    return this.kcal;
  }

  getProtein(): number {
    return this.protein;
  }

  getCarbohydrate(): number {
    return this.carbohydrate;
  }

  getSaturatedFat(): number {
    return this.saturatedFat;
  }

  getUnsaturatedFat(): number {
    return this.unsaturatedFat;
  }

  getSugar(): number {
    return this.sugar;
  }

  getSalt(): number {
    return this.salt;
  }

  getFiber(): number {
    return this.fiber;
  }

  getPackageSize(): number {
    return this.packageSize;
  }

  getPackagePrice(): number {
    return this.packagePrice;
  }
}
