package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CategoryTest {

    Category category;

    @BeforeEach
    void setUp() {
        category = new Category();
        category.setId(1001L);
        category.setName("Bass");
    }

    @Test
    void category() {

        assertAll("Category tests",
                () -> assertAll("Category properties",
                        () -> assertEquals(1001L, (long) category.getId(), "Id failed"),
                        () -> assertNotEquals(1002L, category.getId(), "Id failed"),
                        () -> assertEquals("Bass", category.getName(), "name failed"),
                        () -> assertNotEquals("Bas", category.getName(), "name failed"))
        );
    }
}
