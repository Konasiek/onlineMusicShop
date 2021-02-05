package com.online.musicshop.controllers;

import com.online.musicshop.models.ProductInStock;
import com.online.musicshop.repository.ProductInStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

    @Autowired
    ProductInStockRepository productInStockRepository;

    @GetMapping
    public ResponseEntity<Map<String, Object>> allProducts(
            @RequestParam(required = false) Long category_Id,
            @RequestParam(required = false) String modelName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {

        try {
            List<ProductInStock> products;
            Pageable paging = PageRequest.of(page, size);

            Page<ProductInStock> pageProducts;

            if (modelName != null && category_Id != null) {
                pageProducts = productInStockRepository.findByCategory_IdAndModelNameContaining(category_Id, modelName, paging);
            } else if (category_Id != null) {
                pageProducts = productInStockRepository.findByCategory_Id(category_Id, paging);
            } else if (modelName != null) {
                pageProducts = productInStockRepository.findByModelNameContaining(modelName, paging);
            } else {
                pageProducts = productInStockRepository.findAll(paging);
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
}
