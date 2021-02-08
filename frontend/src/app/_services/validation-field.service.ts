import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ValidationFieldService {

    form: FormGroup;
    formSubmitAttempt: boolean;

    initializeForm(form: FormGroup) {
        this.form = form;
    }

    isFieldValid(field: string) {

        return (
            (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt)
        );
    }

    displayFieldCss(field: string) {
        return {
            'has-danger': this.isFieldValid(field)
        };
    }

    getError(field: string, label: string) {

        let msg: string;

        if (this.isFieldValid(field)) {

            if (this.form.get(field).errors.required) {
                msg = label + " is required";
            }
            if (this.form.get(field).errors.email) {
                msg = label + " must be a valid email address";
            }
            if (this.form.get(field).errors.emailExist) {
                msg = label + " already exist";
            }
            if (this.form.get(field).errors.maxlength) {
                msg = label + " must not exceed 8 digits in length";
            }
        }
        return msg;
    }

    validateAllFormFields(formGroup: FormGroup) {

        this.formSubmitAttempt = true;

        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({onlySelf: true});
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }
}
