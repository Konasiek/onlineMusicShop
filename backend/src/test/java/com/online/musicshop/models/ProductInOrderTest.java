package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductInOrderTest {

    ProductInOrder productInOrder;

    @BeforeEach
    void setUp() {
        productInOrder = new ProductInOrder();
        productInOrder.setId(100L);
        productInOrder.setImageURL("https://imageUrl.com");
        productInOrder.setModelName("Bullet");
        productInOrder.setProducerName("Fender");
        productInOrder.setPrice(2500L);
        productInOrder.setQuantity(5L);
        Category category = new Category();
        category.setName("Banjo");
        productInOrder.setCategory(category);
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
                                () -> assertEquals("Banjo", productInOrder.getCategory().getName(), "cart id failed")))
        );
    }
}
