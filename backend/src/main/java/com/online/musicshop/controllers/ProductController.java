package com.online.musicshop.controllers;

import com.online.musicshop.models.ProductInOrder;
import com.online.musicshop.models.ProductInStock;
import com.online.musicshop.repository.ProductInStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

    private ProductInStockRepository productInStockRepository;

    @Autowired
    public ProductController(ProductInStockRepository productInStockRepository) {
        this.productInStockRepository = productInStockRepository;
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> allProducts(
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String searchPhrase,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {

        try {
            List<ProductInStock> products;
            Pageable paging = PageRequest.of(page, size);

            Page<ProductInStock> pageProducts;

            String modelName = searchPhrase;
            String producerName = searchPhrase;

            if (modelName != null && categoryId != null) {
                pageProducts = productInStockRepository
                        .findByCategoryIdAndModelNameContainingOrCategoryIdAndProducerNameContaining(categoryId, modelName, categoryId, producerName, paging);
            } else if (categoryId != null) {
                pageProducts = productInStockRepository
                        .findByCategoryId(categoryId, paging);
            } else if (modelName != null) {
                pageProducts = productInStockRepository
                        .findByModelNameContainingOrProducerNameContaining(modelName, producerName, paging);
            } else {
                pageProducts = productInStockRepository
                        .findAll(paging);
            }

            products = pageProducts.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("products", products);
            response.put("currentPage", pageProducts.getNumber());
            response.put("totalItems", pageProducts.getTotalElements());
            response.put("totalPages", pageProducts.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity updateProducts(@RequestBody List<ProductInOrder> productsToUpdate) {

        try {
            for (int i = 0; i < productsToUpdate.size(); i++) {
                Optional<ProductInStock> productToUpdate = productInStockRepository.findById(productsToUpdate.get(i).getId());
                Long quantity = productToUpdate.get().getStock();
                quantity -= productsToUpdate.get(i).getQuantity();
                productInStockRepository.updateQuantity(productsToUpdate.get(i).getId(), quantity);
            }
            return new ResponseEntity(null, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
