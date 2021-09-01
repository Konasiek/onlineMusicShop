import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {CategoryService} from './_services/category.service';
import {CartService} from './_services/cart.service';
import {Router} from '@angular/router';
import {LoginService} from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  @HostBinding('class.isLoggedIn')
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  @HostBinding('class.itemsInCart')
  itemsInCart: number;

  constructor(private tokenStorageService: TokenStorageService,
              private categoryService: CategoryService,
              private cartService: CartService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.change.subscribe(
      a => {
        this.isLoggedIn = a;
        this.deliverUser();
      });
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.cartService.change.subscribe(a => {
      this.itemsInCart = a;
    });
    this.cartService.getItemsInCart();
    this.deliverUser();

  }

  deliverUser(): any {
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.cartService.emptyCart();
    this.itemsInCart = 0;
    this.router.navigate(['/product']);
  }

  @HostListener('changeCategory')
  changeCategory(categoryId): void {
    this.categoryService.changeCategory(categoryId);
  }
}
