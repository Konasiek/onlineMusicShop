import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoryService{

    category_Id;

    constructor() {
    }

    @Output () change: EventEmitter<number> = new EventEmitter<number>();

    changeCategory(category) {
        this.category_Id = category;
        this.change.emit(this.category_Id);
    }

}
