import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const baseUrl = 'http://localhost:8080/api/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }

    getAll(params): Observable<any> {
        return this.http.get(baseUrl, {params});
    }

    //add more crud method later
}
