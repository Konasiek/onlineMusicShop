import {Component, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


    products: any;
    currentProduct = null;
    currentIndex = -1;
    modelName = '';

    page = 1;
    count = 0;
    pageSize = 5;
    pageSizes = [5, 10, 50];

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.retrieveProducts();
    }

    getRequestParams(searchModelName, page, pageSize): any {
        let params = {};

        if (searchModelName) {
            params['modelName'] = searchModelName;
        }
        if (page) {
            params['page'] = page - 1;
        }
        if (pageSize) {
            params['size'] = pageSize;
        }
        return params;
    }

    retrieveProducts(): void {
        const params = this.getRequestParams(this.modelName, this.page, this.pageSize);

        this.productService.getAll(params)
            .subscribe(
                response => {
                    const {products, totalItems} = response;
                    this.products = products;
                    this.count = totalItems;
                    console.log(response);
                },
                error => {
                    console.log(error);
                })
    }

    handlePageChange(event): void {
        this.page = event;
        this.retrieveProducts();
    }

    handlePageSizeChange(event): void {
        this.pageSize = event.target.value;
        this.page = 1;
        this.retrieveProducts();
    }

    setActiveProduct(product, index): void {
        this.currentProduct = product;
        this.currentIndex = index;
    }
}
