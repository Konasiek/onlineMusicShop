package com.online.musicshop.services;

import com.online.musicshop.models.Cart;

public interface CartService {

    Cart save(Cart cart);

    void saveInCart_Products(Long cart_id, Long product_id);
}
