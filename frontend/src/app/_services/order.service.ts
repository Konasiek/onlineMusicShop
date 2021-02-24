import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderRequest} from "../model/OrderRequest";

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

    async add(orderRequest: OrderRequest): Promise<any> {
        return await this.http.post<OrderRequest>(baseUrl, orderRequest).toPromise();
    }
}
