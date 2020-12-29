package com.online.musicshop.repository;

import com.online.musicshop.models.ProductInStock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductInStockRepository extends JpaRepository<ProductInStock, Long> {

    Page<ProductInStock> findByModelNameContaining(String modelName, Pageable pageable);

    Page<ProductInStock> findAll(Pageable pageable);
}
