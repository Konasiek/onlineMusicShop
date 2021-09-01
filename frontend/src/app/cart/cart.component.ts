import {Component, OnInit} from '@angular/core';
import {CartService} from '../_services/cart.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: string[] = [];
  grandTotal = 0.00;
  hasItems: boolean;

  isLoggedIn = false;

  constructor(private cartService: CartService,
              private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.cartService.retrieveCart()) {
      this.reloadCart();
    }
  }

  reloadCart(): void {
    this.cart = this.cartService.retrieveCart();
    this.grandTotal = this.cartService.getTotal();
    this.hasItems = (this.cart.length > 0);
  }

  updateQuantity(productId: number, quantity: number): void {

    if (quantity > 0) {
      this.cart = this.cartService.updateQuantity(productId, quantity);
    }
    this.reloadCart();
  }

  removeItem(id: number): void {
    this.cart = this.cartService.removeItem(id);
    this.reloadCart();
  }

  goToShipping(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/shipping']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
