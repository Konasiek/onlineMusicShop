import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {
    }

    cart: string[] = [];
    data: string[] = [];

    initCart() {
        localStorage.setItem('cart', '');
        return true;
    }

    retriveCart() {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'));
        } else {
            return false;
        }
    }

    addToCart(product: any, quantity: number) {

        this.cart = (localStorage.getItem('cart') != null) ? JSON.parse(localStorage.getItem('cart')) : [];
        this.data = JSON.parse(localStorage.getItem('data'));
        let hasMatch: boolean = false;

        //checking product exists already in a cart
        for (let index = 0; index < this.cart.length; ++index) {

            let cartIndex = this.cart[index];

            if (cartIndex['id'] == product['id']) {
                hasMatch = true;
                break;
            }
        }
        if (hasMatch) {
            return false;
        }

        let total: number = product['price'] * quantity;
        let cartData: any = {
            'id': product['id'],
            'modelName': product['modelName'],
            'producerName': product['producerName'],
            'quantity': quantity,
            'stock': product['stock'],
            'imageURL': product['imageURL'],
            'price': product['price'],
            'total': total
        };

        this.cart.push(cartData);
        localStorage.setItem('cart', JSON.stringify(this.cart));

        return true;
    }

    

    getTotal() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        let total: number = 0.00;

        for (let index = 0; index < this.cart.length; ++index) {
            let cartIndex = this.cart[index];
            total += cartIndex['total'];
        }
        return total;
    }
}
