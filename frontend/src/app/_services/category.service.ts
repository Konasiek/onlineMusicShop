import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoryService{

    categoryId;

    constructor() {
    }

    @Output () change: EventEmitter<number> = new EventEmitter<number>();

    changeCategory(category) {
        this.categoryId = category;
        this.change.emit(this.categoryId);
    }

}
