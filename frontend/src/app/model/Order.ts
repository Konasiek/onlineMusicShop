import {UserInOrder} from "./UserInOrder";
import {CartInOrder} from "./CartInOrder";

export class Order {

    buildingNumberAndApartment: string;
    street?: string;
    city: string;
    country: string;
    postCode: string;
    contactPerson?: string;
    email: string;
    phone: string;
    user: UserInOrder;
    cart: CartInOrder;

    constructor(buildingNumberAndApartment: string, street: string, city: string, country: string, postCode: string, contactPerson: string, email: string, phone: string, user: UserInOrder, cart: CartInOrder) {
        this.buildingNumberAndApartment = buildingNumberAndApartment;
        this.street = street;
        this.city = city;
        this.country = country;
        this.postCode = postCode;
        this.contactPerson = contactPerson;
        this.email = email;
        this.phone = phone;
        this.user = user;
        this.cart = cart;
    }
}
