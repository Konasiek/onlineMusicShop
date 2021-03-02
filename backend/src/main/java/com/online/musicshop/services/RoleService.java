package com.online.musicshop.services;

import com.online.musicshop.models.ERole;
import com.online.musicshop.models.Role;

import java.util.Optional;

public interface RoleService {

    Optional<Role> findByName(ERole name);
}
