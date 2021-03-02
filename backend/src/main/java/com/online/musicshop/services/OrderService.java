package com.online.musicshop.services;

import com.online.musicshop.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface OrderService {

    Page<Order> findByUser_IdOrderByIdDesc(Long user_id, Pageable pageable);

    void save(Order order);
}
