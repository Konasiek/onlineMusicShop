import {Component, OnInit} from '@angular/core';
import {CartService} from "../_services/cart.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cart: string[] = [];
    grandTotal: number = 0.00;
    hasItems: boolean;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        if (this.cartService.retriveCart()) {
            this.initCart();
        }
    }

    initCart() {
        this.cart = this.cartService.retriveCart();
        this.grandTotal = this.cartService.getTotal();
        this.hasItems = (this.cart.length > 0);
    }

    updateQuantity(productId: number, quantity: number) {

        if (quantity > 0) {
            this.cart = this.cartService.updateQuantity(productId, quantity);
            this.initCart();
        } else {
            this.initCart();
        }
    }

    removeItem(id: number) {
        this.cart = this.cartService.removeItem(id);
        this.initCart();
    }
}
