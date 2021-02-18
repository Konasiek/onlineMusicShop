import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {ProductService} from "../_services/product.service";
import {CategoryService} from "../_services/category.service";
import {CartService} from "../_services/cart.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: any;
    currentIndex = -1;
    searchPhrase = '';

    page = 1;
    count = 0;
    pageSize = 5;
    pageSizes = [5, 10, 50];
    @HostBinding('class.categoryId')
    categoryId = 0;

    constructor(private productService: ProductService,
                private categoryService: CategoryService,
                private cartService: CartService) {
    }

    ngOnInit(): void {
        this.categoryService.change.subscribe(a => {
            this.categoryId = a;
            this.retrieveProducts();
        });
        this.retrieveProducts();
    }

    getRequestParams(categoryId, searchPhrase, page, pageSize): any {
        let params = {};

        if (categoryId) {
            params['categoryId'] = categoryId;
        }
        if (searchPhrase) {
            params['searchPhrase'] = searchPhrase;
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
        const params = this.getRequestParams(this.categoryId, this.searchPhrase, this.page, this.pageSize);

        this.productService.getAll(params)
            .subscribe(
                response => {
                    const {products, totalItems} = response;
                    this.products = products;
                    this.count = totalItems;

                    if (totalItems <= this.pageSize) {
                    }
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

    onSearchChange(): void {
        this.page = 1;
        this.retrieveProducts();
    }

    @HostListener('addToCart')
    addToCart(product: any): void {
        if (product.stock !== 0) {
            this.cartService.addToCart(product, 1);
        } else {
            alert("product is out of stock");
        }
    }
}
