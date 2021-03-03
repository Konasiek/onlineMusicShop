package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProductInStockTest {

    ProductInStock productInStock;

    @BeforeEach
    void setUp() {
        productInStock = new ProductInStock();
        productInStock.setId(89L);
        productInStock.setImageURL("http://abdefg.com");
        productInStock.setModelName("SD-7");
        productInStock.setProducerName("Yamaha");
        productInStock.setPrice(200L);
        productInStock.setStock(10L);
        Category category = new Category();
        category.setName("Guitar");
        productInStock.setCategory(category);
    }

    @Test
    void productInStack() {
        assertAll("Product in order tests",
                () -> assertAll("Product in order properties",
                        () -> assertEquals(89L, (long) productInStock.getId(), "Id failed"),
                        () -> assertEquals("http://abdefg.com", productInStock.getImageURL(), "image Url failed"),
                        () -> assertEquals("SD-7", productInStock.getModelName(), "model name failed"),
                        () -> assertEquals("Yamaha", productInStock.getProducerName(), "producer name failed"),
                        () -> assertEquals(200L, (long) productInStock.getPrice(), "price failed"),
                        () -> assertEquals(10L, (long) productInStock.getStock(), "stack failed"),
                        () -> assertAll("Category properties",
                                () -> assertEquals("Guitar", productInStock.getCategory().getName(), "category name failed")))
        );
    }
}
