package com.online.musicshop.repository;

import com.online.musicshop.models.Cart;
import org.hibernate.annotations.SQLUpdate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO cart_products (cart_id, product_id) VALUES (?1, ?2);", nativeQuery = true)
    void saveInCart_Products(Long cart_id, Long product_id);
}
