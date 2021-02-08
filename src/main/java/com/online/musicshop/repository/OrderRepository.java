package com.online.musicshop.repository;

import com.online.musicshop.models.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

//    @Query(value = "SELECT * FROM orders WHERE (user_id = ?1)", nativeQuery = true)
    Page<Order> findByUser_Id(Long user_id, Pageable pageable);

    Page<Order> findAll(Pageable pageable);
}
