package com.online.musicshop.services;

import com.online.musicshop.models.User;

public interface UserService {

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    void save(User user);
}
