package com.online.musicshop.controllers;

import com.online.musicshop.models.Order;
import com.online.musicshop.models.ProductInStock;
import com.online.musicshop.repository.OrderRepository;
import com.online.musicshop.repository.ProductInStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @GetMapping
    public ResponseEntity<Map<String, Object>> allOrders(
            @RequestParam() Long user_id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {

        try {
            List<Order> orders;
            Pageable paging = PageRequest.of(page, size);

            Page<Order> pageOrders;
            pageOrders = orderRepository.findByUser_id(user_id, paging);
            orders = pageOrders.getContent();

            Map<String, Object> response = new HashMap<>();
            response.put("orders", orders);
            response.put("currentPage", pageOrders.getNumber());
            response.put("totalItems", pageOrders.getTotalElements());
            response.put("totalPages", pageOrders.getTotalPages());

            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
