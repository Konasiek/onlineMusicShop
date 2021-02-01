import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationFieldService} from "../_services/validation-field.service";


@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

    shippingForm: FormGroup;
    shipData: any;

    constructor(
        private validationFieldService: ValidationFieldService,
        private fb: FormBuilder) {
        this.shippingForm = fb.group({
            'contact_person': new FormControl(null, [Validators.required]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'phone': new FormControl(null, [Validators.required]),
            'bldg_unit': new FormControl(null, [Validators.required]),
            'street': new FormControl(null, [Validators.required]),
            'city': new FormControl(null, [Validators.required]),
            'country': new FormControl(null, [Validators.required]),
            'postal': new FormControl(null, [Validators.required]),
        });

        //Initialize validation service
        this.validationFieldService.initializeForm(this.shippingForm);

    }

    ngOnInit(): void {

        if (localStorage.getItem('shipDetail')) {
            this.shipData = JSON.parse(localStorage.getItem('shipDetail'));

            this.shippingForm.patchValue({
                'contact_person': this.shipData.contact_person,
                'email': this.shipData.email,
                'phone': this.shipData.phone,
                'bldg_unit': this.shipData.bldg_unit,
                'street': this.shipData.street,
                'city': this.shipData.city,
                'country': this.shipData.country,
                'postal': this.shipData.postal
            });
        }
    }

    save(data) {

        if (this.shippingForm.valid) {

            this.shipData = {
                'bldg_unit': data['bldg_unit'],
                'city': data['city'],
                'country': data['country'],
                'contact_person': data['contact_person'],
                'email': data['email'],
                'phone': data['phone'],
                'postal': data['postal'],
                'street': data['street']
            };

            localStorage.setItem('shipDetail', JSON.stringify(this.shipData));

        } else {
            this.validationFieldService.validateAllFormFields(this.shippingForm);
        }
    }
}
