package com.online.musicshop.repository;

import com.online.musicshop.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    Page<Order> findByUser_id(Long user_id, Pageable pageable);
}
