package com.online.musicshop.services.serviceImpl;

import com.online.musicshop.models.ProductInStock;
import com.online.musicshop.repository.ProductInStockRepository;
import com.online.musicshop.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductInStockRepository productInStockRepository;

    @Autowired
    public ProductServiceImpl(ProductInStockRepository productInStockRepository) {
        this.productInStockRepository = productInStockRepository;
    }

    @Override
    public Page<ProductInStock> findByCategoryIdAndModelNameContainingOrCategoryIdAndProducerNameContaining(Long categoryId, String modelName, Long categoryId2, String producerName, Pageable pageable) {
        return productInStockRepository.findByCategoryIdAndModelNameContainingOrCategoryIdAndProducerNameContaining(categoryId, modelName, categoryId2, producerName, pageable);
    }

    @Override
    public Page<ProductInStock> findByCategoryId(Long categoryId, Pageable paging) {
        return productInStockRepository.findByCategoryId(categoryId, paging);
    }

    @Override
    public Page<ProductInStock> findByModelNameContainingOrProducerNameContaining(String modelName, String producerName, Pageable paging) {
        return productInStockRepository.findByModelNameContainingOrProducerNameContaining(modelName, producerName, paging);
    }

    @Override
    public Page<ProductInStock> findAll(Pageable paging) {
        return productInStockRepository.findAll(paging);
    }

    @Override
    public Optional<ProductInStock> findById(Long id) {
        return productInStockRepository.findById(id);
    }

    @Override
    public void updateQuantity(Long id, Long quantity) {
        productInStockRepository.updateQuantity(id, quantity);
    }
}
