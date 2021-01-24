import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {CategoryService} from "./_services/category.service";
import {CartService} from "./_services/cart.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    username?: string;
    @HostBinding('class.itemsInCart')
    itemsInCart: number;

    constructor(private tokenStorageService: TokenStorageService,
                private categoryService: CategoryService,
                private cartService: CartService) {
    }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        this.cartService.change.subscribe(a => {
            this.itemsInCart = a;
        });
        this.cartService.getItemsInCart();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }

    @HostListener('changeCategory')
    changeCategory(category_Id): void {
        this.categoryService.changeCategory(category_Id);
    }
}
