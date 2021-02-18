package com.online.musicshop.repository;

import com.online.musicshop.models.ProductInStock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface ProductInStockRepository extends JpaRepository<ProductInStock, Long> {

    Page<ProductInStock> findAll(Pageable pageable);

    Page<ProductInStock> findByModelNameContainingOrProducerNameContaining(String modelName, String producerName, Pageable pageable);

    Page<ProductInStock> findByCategoryId(Long categoryId, Pageable pageable);

    Page<ProductInStock> findByCategoryIdAndModelNameContainingOrProducerNameContaining(Long categoryId, String modelName, String producerName, Pageable pageable);

    Optional<ProductInStock> findById(Long id);

    @Transactional
    @Modifying
    @Query(value ="UPDATE product_in_stock SET stock=?2 WHERE id=?1", nativeQuery = true)
    void updateQuantity(Long id, Long quantity);
}
