import {Component, OnInit} from '@angular/core';
import {OrderService} from "../_services/order.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    orders: any;
    currentIndex = -1;

    userObj: any;
    user_id: any;

    page = 1;
    count = 0;
    pageSize = 5;

    constructor(private orderService: OrderService,
                private tokenStorageService: TokenStorageService) {
    }

    ngOnInit(): void {
        this.userObj = Object.values(this.tokenStorageService.getUser());
        this.user_id = this.userObj[0];
        this.retrieveOrders();
    }

    getRequestParams(user_id, page, pageSize): any {
        let params = {};

        if (user_id) {
            params['user_id'] = user_id;
        }
        if (page) {
            params['page'] = page - 1;
        }
        if (pageSize) {
            params['size'] = pageSize;
        }
        return params;
    }

    retrieveOrders(): void {
        const params = this.getRequestParams(this.user_id, this.page, this.pageSize);

        this.orderService.getAll(params)
            .subscribe(
                response => {
                    const {orders, totalItems} = response;
                    this.orders = orders;
                    this.count = totalItems;
                    console.log(response);
                },
                error => {
                    console.log(error);
                })
    }

    handlePageChange(event): void {
        this.page = event;
        this.retrieveOrders();
    }
}
