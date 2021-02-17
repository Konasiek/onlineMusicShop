import {AfterViewInit, Component, HostBinding, HostListener, OnInit} from '@angular/core';
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
    modelName = '';

    page = 1;
    count = 0;
    pageSize = 5;
    pageSizes = [5, 10, 50];
    @HostBinding('class.category_Id')
    category_Id = 0;

    constructor(private productService: ProductService,
                private categoryService: CategoryService,
                private cartService: CartService) {
    }

    ngOnInit(): void {
        this.categoryService.change.subscribe(a => {
            this.category_Id = a;
            this.retrieveProducts();
        });
        this.retrieveProducts();
    }

    getRequestParams(category_Id, searchModelName, page, pageSize): any {
        let params = {};

        if (category_Id) {
            params['category_Id'] = category_Id;
        }
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
        const params = this.getRequestParams(this.category_Id, this.modelName, this.page, this.pageSize);

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

    onKeydown(event) {
        if (event.key === "Enter") {
            this.retrieveProducts();
        }
    }
    @HostListener('addToCart')
    addToCart(product: any): void {

        console.log(product.stock);
        if (product.stock !== 0) {
            this.cartService.addToCart(product, 1);
        } else {
            alert("product is out of stock");
        }
    }
}
