package com.online.musicshop.services.serviceImpl;

import com.online.musicshop.models.ERole;
import com.online.musicshop.models.Role;
import com.online.musicshop.repository.RoleRepository;
import com.online.musicshop.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements RoleService {

    private RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public Optional<Role> findByName(ERole name) {
        return roleRepository.findByName(name);
    }
}