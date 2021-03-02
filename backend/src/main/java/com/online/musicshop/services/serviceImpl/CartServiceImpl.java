package com.online.musicshop.services.serviceImpl;

import com.online.musicshop.models.Cart;
import com.online.musicshop.repository.CartRepository;
import com.online.musicshop.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartService {

    private CartRepository cartRepository;

    @Autowired
    public CartServiceImpl(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @Override
    public Cart save(Cart cart) {
        cartRepository.save(cart);
        return cart;
    }

    @Override
    public void saveInCart_Products(Long cart_id, Long product_id) {
        cartRepository.saveInCart_Products(cart_id, product_id);
    }
}
