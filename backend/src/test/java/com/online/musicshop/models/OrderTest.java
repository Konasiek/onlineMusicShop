package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class OrderTest {

    Order order;
    Cart cart;
    User user;

    @BeforeEach
    void setUp() {
        cart = new Cart();
        cart.setId(100L);
        user = new User("David", "david1111@gmail.com", "david12AXD");
        user.setId(99L);

        order = new Order("5", "Main", "Boston", "USA", "34-666",
                "James Bond", "pusher12@gmail.com", "666999666", user, cart);
        order.setId(100L);
    }

    @Test
    void Order() {
        assertAll("Order tests",
                () -> assertAll("Order properties",
                        () -> assertEquals(100L, (long) order.getId(), "Id failed"),
                        () -> assertEquals("5", order.getBuildingNumberAndApartment(), "builing number/apartment failed"),
                        () -> assertEquals("Boston", order.getCity(), "city failed"),
                        () -> assertEquals("James Bond", order.getContactPerson(), "contact person failed"),
                        () -> assertEquals("pusher12@gmail.com", order.getEmail(), "email failed"),
                        () -> assertEquals("666999666", order.getPhone(), "phone failed"),
                        () -> assertEquals("34-666", order.getPostCode(), "post code failed"),
                        () -> assertEquals("Main", order.getStreet(), "street failed"),
                        () -> assertAll("Cart properties",
                                () -> assertTrue(cart.getProductsInOrder().isEmpty(), "Products in order failed"),
                                () -> assertEquals(100L, (long) cart.getId(), "cart id failed"),
                                () -> assertThrows(IndexOutOfBoundsException.class, () -> cart.getProductsInOrder().get(10))),
                        () -> assertAll("User properties",
                                () -> assertEquals("David", user.getUsername(), "user username failed"),
                                () -> assertEquals("david1111@gmail.com", user.getEmail(), "user email failed"),
                                () -> assertEquals("david12AXD", user.getPassword(), "user password failed"),
                                () -> assertEquals(99L, (long) user.getId(), "user id failed")))
        );
    }
}
