import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryId: any;

  constructor() {
  }

  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  changeCategory(category): void {
    this.categoryId = category;
    this.change.emit(this.categoryId);
  }
}
