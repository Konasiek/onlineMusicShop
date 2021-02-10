import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../_services/cart.service";


@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

    shippingForm: FormGroup;
    submitted = false;

    cart: string[] = [];
    grandTotal: number = 0.00;
    hasItems: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private cartService: CartService) {
    }

    ngOnInit(): void {

        this.shippingForm = this.formBuilder.group({
            bldg_unit: ['', [Validators.required, Validators.pattern(/^[^A-Za-z]+$/)]],
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

    onSubmit() {
        this.submitted = true;

        if (this.shippingForm.invalid) {
            alert('please correct shipping details')
            return;
        }

        alert('Order has been placed')
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
