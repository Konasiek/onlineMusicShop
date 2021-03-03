package com.online.musicshop.models;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RoleTest {

    Role role;

    @BeforeEach
    void setUp() {
        role = new Role();
        role.setId(78);
        role.setName(ERole.ROLE_USER);
    }

    @Test
    void role() {
        assertAll("Role tests",
                () -> assertAll("Role properties",
                        () -> assertEquals(78, role.getId().intValue(), "id failed"),
                        () -> assertEquals(ERole.ROLE_USER, role.getName(), "name failed"))
        );
    }
}
