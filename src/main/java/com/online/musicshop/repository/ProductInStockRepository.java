package com.online.musicshop.repository;

import com.online.musicshop.models.ProductInStock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductInStockRepository extends JpaRepository<ProductInStock, Long> {

    Page<ProductInStock> findAll(Pageable pageable);

    Page<ProductInStock> findByModelNameContaining(String modelName, Pageable pageable);

    Page<ProductInStock> findByCategory_Id(Long category_Id, Pageable pageable);

    Page<ProductInStock> findByCategory_IdAndModelNameContaining(Long category_Id, String modelName, Pageable pageable);
}
