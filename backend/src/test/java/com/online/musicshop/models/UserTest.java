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
        user = new User();
        user.setId(100L);
        user.setEmail("konrad12@gmail.com");
        user.setPassword("12345XCV");
        user.setUsername("konrad1212");

        Role role = new Role();
        role.setName(ERole.ROLE_USER);
        roles = new HashSet<>();
        roles.add(role);
        user.setRoles(roles);

        Order order = new Order();
        orders = new ArrayList<>();
        orders.add(order);
        user.setOrders(orders);
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
