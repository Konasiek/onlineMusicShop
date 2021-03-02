package com.online.musicshop.services;

import com.online.musicshop.models.ProductInStock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ProductService {

    Page<ProductInStock> findByCategoryIdAndModelNameContainingOrCategoryIdAndProducerNameContaining(Long categoryId, String modelName, Long categoryId2, String producerName, Pageable pageable);

    Page<ProductInStock> findByCategoryId(Long categoryId, Pageable paging);

    Page<ProductInStock> findByModelNameContainingOrProducerNameContaining(String modelName, String producerName, Pageable paging);

    Page<ProductInStock> findAll(Pageable paging);

    Optional<ProductInStock> findById(Long id);

    void updateQuantity(Long id, Long quantity);
}
