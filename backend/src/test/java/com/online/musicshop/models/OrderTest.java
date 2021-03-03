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

        order = new Order();
        cart = new Cart();
        cart.setId(100L);
        user = new User();
        user.setId(99L);

        order.setId(100L);
        order.setBuildingNumberAndApartment("5");
        order.setCity("Boston");
        order.setContactPerson("James Bond");
        order.setCountry("USA");
        order.setEmail("pusher12@gmail.com");
        order.setPhone("666999666");
        order.setPostCode("34-666");
        order.setStreet("Main");
        order.setCart(cart);
        order.setUser(user);
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
                                () -> assertEquals(99L, (long) user.getId(), "user id failed")))
        );
    }
}
