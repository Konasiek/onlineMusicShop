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

  // tslint:disable-next-line:no-output-native
  @Output() change: EventEmitter<number> = new EventEmitter<number>();


  initCart(): void {
    sessionStorage.setItem('cart', '');
  }

  retrieveCart(): any {
    if (sessionStorage.getItem('cart')) {
      return JSON.parse(sessionStorage.getItem('cart'));
    }
  }

  addToCart(product: any, quantity: number): boolean {

    this.cart = (sessionStorage.getItem('cart') != null) ? JSON.parse(sessionStorage.getItem('cart')) : [];
    this.data = JSON.parse(sessionStorage.getItem('data'));
    let hasMatch = false;

    // checking product exists already in a cart
    for (const cartIndex of this.cart) {
      if (cartIndex[`id`] === product.id) {
        hasMatch = true;
        break;
      }
    }
    if (hasMatch) {
      return false;
    }

    const total: number = product.price * quantity;
    const cartData: any = {
      id: product.id,
      modelName: product.modelName,
      producerName: product.producerName,
      quantity,
      stock: product.stock,
      imageURL: product.imageURL,
      price: product.price,
      total
    };

    this.cart.push(cartData);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));

    this.getItemsInCart();

    return true;
  }

  removeItem(productId: number): string[] {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    const tempCart: string[] = [];

    for (const cartIndex of this.cart) {
      if (cartIndex[`id`] !== productId) {
        tempCart.push(cartIndex);
      }
    }
    this.cart = tempCart;
    sessionStorage.setItem('cart', JSON.stringify(this.cart));

    this.getItemsInCart();

    return this.cart;
  }

  updateQuantity(productId: number, quantity: number): string[] {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    const tempCart: string[] = [];


    for (const cartIndex of this.cart) {
      if (cartIndex[`id`] === productId) {
        const total: number = cartIndex[`price`] * quantity;
        const cartData: any = {
          id: cartIndex[`id`],
          modelName: cartIndex[`modelName`],
          producerName: cartIndex[`producerName`],
          quantity,
          stock: cartIndex[`stock`],
          imageURL: cartIndex[`imageURL`],
          price: cartIndex[`price`],
          total
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

  getTotal(): number {
    this.cart = JSON.parse(sessionStorage.getItem('cart'));
    let total = 0.00;

    for (const cartIndex of this.cart) {
      total += cartIndex[`total`];
    }
    return total;
  }

  getItemsInCart(): void {
    const tempCart = JSON.parse(sessionStorage.getItem('cart'));
    if (tempCart != null) {
      this.itemsInCart = tempCart.length;
    }
    this.change.emit(this.itemsInCart);
  }

  emptyCart(): void {
    sessionStorage.removeItem('cart');
    this.itemsInCart = 0;
  }
}
