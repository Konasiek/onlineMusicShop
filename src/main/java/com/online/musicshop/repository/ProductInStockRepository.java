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

    Page<ProductInStock> findByModelNameContaining(String modelName, Pageable pageable);

    Page<ProductInStock> findByCategory_Id(Long category_Id, Pageable pageable);

    Page<ProductInStock> findByCategory_IdAndModelNameContaining(Long category_Id, String modelName, Pageable pageable);

    Optional<ProductInStock> findById(Long id);

    @Transactional
    @Modifying
    @Query(value ="UPDATE product_in_stock SET stock=?2 WHERE id=?1", nativeQuery = true)
    void updateQuantity(Long id, Long quantity);
}
