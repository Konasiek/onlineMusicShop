import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInOrder} from "../model/ProductInOrder";
import {apiUrl} from "../../environments/environment";

const baseUrl = `${apiUrl}/product`;

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getAll(params): Observable<any> {
        return this.http.get(baseUrl, {params});
    }

    updateQuantity(productsToUpdate: Array<ProductInOrder>): Observable<any> {
        return this.http.post<any>(baseUrl, productsToUpdate);
    }
}
