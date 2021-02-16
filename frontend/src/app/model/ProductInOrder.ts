import {Category} from "./Category";

export class ProductInOrder {

    producerName: string;
    modelName: string;
    imageURL: string;
    price: number;
    category: Category;
    quantity: number;


    constructor(producerName: string, modelName: string, imageURL: string, price: number, category: Category, quantity: number) {
        this.producerName = producerName;
        this.modelName = modelName;
        this.imageURL = imageURL;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
}
