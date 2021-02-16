import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductInOrder} from "../model/ProductInOrder";
import {Order} from "../model/Order";
import {OrderRequest} from "../model/OrderRequest";
import {Category} from "../model/Category";
import {UserInOrder} from "../model/UserInOrder";
import {CartInOrder} from "../model/CartInOrder";

const baseUrl = 'http://localhost:8080/api/order';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private http: HttpClient) {
    }

    getAll(params): Observable<any> {
        return this.http.get(baseUrl, {params});
    }

    add(orderRequest: OrderRequest): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<any>(baseUrl, orderRequest, httpOptions);
    }
}
