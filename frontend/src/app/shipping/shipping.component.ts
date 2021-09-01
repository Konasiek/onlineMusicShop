import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../_services/cart.service';
import {OrderService} from '../_services/order.service';
import {ProductInOrder} from '../model/ProductInOrder';
import {UserInOrder} from '../model/UserInOrder';
import {CartInOrder} from '../model/CartInOrder';
import {Order} from '../model/Order';
import {OrderRequest} from '../model/OrderRequest';
import {TokenStorageService} from '../_services/token-storage.service';
import {Router} from '@angular/router';
import {ProductService} from '../_services/product.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingForm: FormGroup;

  orderRequest: OrderRequest;

  submitted = false;

  cart: string[] = [];
  grandTotal = 0.00;
  hasItems: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private tokenStorageService: TokenStorageService,
    private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.shippingForm = this.formBuilder.group({
      bldg_unit: ['', Validators.required],
      street: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
      city: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
      country: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
      postal: ['', Validators.required],
      contactPerson: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[^A-Za-z]+$/), Validators.minLength(9)]]
    });

    if (this.cartService.retrieveCart()) {
      this.initCart();
    }
  }

  // tslint:disable-next-line:typedef
  get f() {
    return this.shippingForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.shippingForm.invalid) {
      return;
    } else {
      const listOfProducts: Array<ProductInOrder> = this.cartService.retrieveCart();

      const currentUser = this.tokenStorageService.getUser();
      const userInOrder: UserInOrder = new UserInOrder(currentUser.id);

      const cartInOrder: CartInOrder = new CartInOrder();
      const order: Order = new Order(
        this.shippingForm.get('bldg_unit').value,
        this.shippingForm.get('street').value,
        this.shippingForm.get('city').value,
        this.shippingForm.get('country').value,
        this.shippingForm.get('contactPerson').value,
        this.shippingForm.get('postal').value,
        this.shippingForm.get('email').value,
        this.shippingForm.get('phone').value,
        userInOrder,
        cartInOrder);

      this.orderRequest = new OrderRequest(listOfProducts, order);
      await this.orderService.add(this.orderRequest);

      // reduce quantity of items in stock
      this.productService.updateQuantity(listOfProducts).subscribe();

      this.cartService.emptyCart();
      this.cartService.getItemsInCart();

      await this.router.navigate(['/order']);
    }
  }

  onReset(): void {
    this.submitted = false;
    this.shippingForm.reset();
  }

  initCart(): void {
    this.cart = this.cartService.retrieveCart();
    this.grandTotal = this.cartService.getTotal();
    this.hasItems = (this.cart.length > 0);
  }
}
