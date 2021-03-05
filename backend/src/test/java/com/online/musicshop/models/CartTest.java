package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CartTest {

    Cart cart;
    List<ProductInOrder> productsInOrder;

    @BeforeEach
    void setUp() {
        ProductInOrder productInOrder1 = new ProductInOrder();
        productsInOrder = new ArrayList<>();
        productsInOrder.add(productInOrder1);
        cart = new Cart(productsInOrder);
        cart.setId(10001L);
    }

    @Test
    void cart() {
        assertAll("Properties tests",
                () -> assertAll("Cart properties",
                        () -> assertEquals(10001L, (long) cart.getId(), "Id failed")),
                () -> assertAll("Products in order tests",
                        () -> assertFalse(cart.getProductsInOrder().isEmpty(), "Product in order failed"),
                        () -> assertThrows(IndexOutOfBoundsException.class,
                                () -> cart.getProductsInOrder().get(10), "No proper exception thrown"))
        );
    }
}
