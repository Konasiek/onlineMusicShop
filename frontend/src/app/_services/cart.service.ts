import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor() {
    }

    cart: string[] = [];
    data: string[] = [];

    itemsInCart: number;


    initCart() {
        sessionStorage.setItem('cart', '');
        return true;
    }

    retriveCart() {
        if (sessionStorage.getItem('cart')) {
            return JSON.parse(sessionStorage.getItem('cart'));
        } else {
            return false;
        }
    }

    addToCart(product: any, quantity: number) {

        this.cart = (sessionStorage.getItem('cart') != null) ? JSON.parse(sessionStorage.getItem('cart')) : [];
        this.data = JSON.parse(sessionStorage.getItem('data'));
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
        sessionStorage.setItem('cart', JSON.stringify(this.cart));

        this.getItemsInCart();

        return true;
    }

    removeItem(productId: number) {
        this.cart = JSON.parse(sessionStorage.getItem('cart'));
        let tempCart: string[] = [];

        for (let index = 0; index < this.cart.length; ++index) {
            let cartIndex = this.cart[index];

            if (cartIndex['id'] != productId) {
                tempCart.push(cartIndex);
            }
        }
        this.cart = tempCart;
        sessionStorage.setItem('cart', JSON.stringify(this.cart));

        this.getItemsInCart();

        return this.cart;
    }

    updateQuantity(productId: number, quantity: number) {
        this.cart = JSON.parse(sessionStorage.getItem('cart'));
        let tempCart: string[] = [];

        for (let index = 0; index < this.cart.length; ++index) {
            let cartIndex = this.cart[index];

            if (cartIndex['id'] === productId) {

                let total: number = cartIndex['price'] * quantity;
                let cartData: any = {
                    'id': cartIndex['id'],
                    'modelName': cartIndex['modelName'],
                    'producerName': cartIndex['producerName'],
                    'quantity': quantity,
                    'stock': cartIndex['stock'],
                    'imageURL': cartIndex['imageURL'],
                    'price': cartIndex['price'],
                    'total': total
                };

                tempCart.push(cartData);
            } else {
                tempCart.push(cartIndex);
            }
        }

        this.cart = tempCart;
        sessionStorage.setItem('cart', JSON.stringify(this.cart));

        return this.cart;
    }

    getTotal() {
        this.cart = JSON.parse(sessionStorage.getItem('cart'));
        let total: number = 0.00;

        for (let index = 0; index < this.cart.length; ++index) {
            let cartIndex = this.cart[index];
            total += cartIndex['total'];
        }
        return total;
    }

    @Output() change: EventEmitter<number> = new EventEmitter<number>();
    getItemsInCart(): void {
        let tempCart = JSON.parse(sessionStorage.getItem('cart'));
        if (tempCart != null) {
            this.itemsInCart = tempCart.length;
        }
        this.change.emit(this.itemsInCart);
    }

    emptyCart(): void {
        sessionStorage.removeItem('cart');
        this.getItemsInCart();
    }
}
