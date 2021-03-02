import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../_services/cart.service";
import {OrderService} from "../_services/order.service";
import {Category} from "../model/Category";
import {ProductInOrder} from "../model/ProductInOrder";
import {UserInOrder} from "../model/UserInOrder";
import {CartInOrder} from "../model/CartInOrder";
import {Order} from "../model/Order";
import {OrderRequest} from "../model/OrderRequest";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";
import {ProductService} from "../_services/product.service";


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
    grandTotal: number = 0.00;
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

        if (this.cartService.retriveCart()) {
            this.initCart();
        }
    }

    get f() {
        return this.shippingForm.controls;
    }

    async onSubmit() {
        this.submitted = true;

        if (this.shippingForm.invalid) {
            return;
        } else {
            let listOfProducts: Array<ProductInOrder> = this.cartService.retriveCart();

            let currentUser = this.tokenStorageService.getUser();
            let userInOrder: UserInOrder = new UserInOrder(currentUser.id);

            let cartInOrder: CartInOrder = new CartInOrder();
            let order: Order = new Order(
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
            this.router.navigate(['/order']);
        }
    }

    onReset() {
        this.submitted = false;
        this.shippingForm.reset();
    }

    initCart() {
        this.cart = this.cartService.retriveCart();
        this.grandTotal = this.cartService.getTotal();
        this.hasItems = (this.cart.length > 0);
    }
}
