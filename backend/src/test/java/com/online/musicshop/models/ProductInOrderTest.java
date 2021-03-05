package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductInOrderTest {

    ProductInOrder productInOrder;

    @BeforeEach
    void setUp() {
        Category category = new Category();
        category.setName("Banjo");
        productInOrder = new ProductInOrder("Fender", "Bullet", "https://imageUrl.com", 2500L, category, 5L);
        productInOrder.setId(100L);
    }

    @Test
    void productInOrder() {
        assertAll("Product in order tests",
                () -> assertAll("Product in order properties",
                        () -> assertEquals(100L, (long) productInOrder.getId(), "Id failed"),
                        () -> assertEquals("https://imageUrl.com", productInOrder.getImageURL(), "image Url failed"),
                        () -> assertEquals("Bullet", productInOrder.getModelName(), "model name failed"),
                        () -> assertEquals("Fender", productInOrder.getProducerName(), "producer name failed"),
                        () -> assertEquals(2500L, (long) productInOrder.getPrice(), "price failed"),
                        () -> assertEquals(5L, (long) productInOrder.getQuantity(), "quantity failed"),
                        () -> assertAll("Category properties",
                                () -> assertEquals("Banjo", productInOrder.getCategory().getName(), "category name failed")))
        );
    }
}
