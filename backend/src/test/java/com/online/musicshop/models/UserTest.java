package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    User user;
    Set<Role> roles;
    List<Order> orders;

    @BeforeEach
    void setUp() {
        Role role = new Role();
        role.setName(ERole.ROLE_USER);
        roles = new HashSet<>();
        roles.add(role);

        Order order = new Order();
        orders = new ArrayList<>();
        orders.add(order);

        user = new User("konrad1212", "konrad12@gmail.com", "12345XCV", roles, orders);
        user.setId(100L);
    }

    @Test
    void user() {
        assertAll("User tests",
                () -> assertAll("User properties",
                        () -> assertEquals(100L, (long) user.getId(), "id failed"),
                        () -> assertEquals("konrad12@gmail.com", user.getEmail(), "email failed"),
                        () -> assertEquals("12345XCV", user.getPassword(), "password failed"),
                        () -> assertEquals("konrad1212", user.getUsername(), "username failed"),
                        () -> assertAll("Role properties",
                                () -> assertEquals(roles, user.getRoles(), "roles failed")),
                        () -> assertAll("Orders properties",
                                () -> assertEquals(orders, user.getOrders(), "orders failed")))
        );
    }
}
