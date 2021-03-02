package com.online.musicshop.controllers;

import com.online.musicshop.models.Cart;
import com.online.musicshop.models.Order;
import com.online.musicshop.payload.request.OrderRequest;
import com.online.musicshop.models.ProductInOrder;
import com.online.musicshop.services.CartService;
import com.online.musicshop.services.OrderService;
import com.online.musicshop.services.ProductInOrderService;
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

    private OrderService orderService;
    private CartService cartService;
    private ProductInOrderService productInOrderService;

    @Autowired
    public OrderController(OrderService orderService,
                           CartService cartService,
                           ProductInOrderService productInOrderService) {
        this.orderService = orderService;
        this.cartService = cartService;
        this.productInOrderService = productInOrderService;
    }

    @GetMapping
    public ResponseEntity<Map<String, Object>> allOrders(
            @RequestParam() Long user_id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {

        try {
            List<Order> orders;
            Pageable paging = PageRequest.of(page, size);

            Page<Order> pageOrders;
            pageOrders = orderService.findByUser_IdOrderByIdDesc(user_id, paging);
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

    @PostMapping
    public ResponseEntity saveOrder(@RequestBody OrderRequest orderRequest) {

        try {
            // receiving data from request
            List<ProductInOrder> productInOrders = orderRequest.getProductsInOrder();
            Order order = orderRequest.getOrder();

            // saving products in db and storing them in local variable
            List<ProductInOrder> lastAddedProducts = productInOrderService.saveAll(productInOrders);

            // saving cart and storing it in local variable
            Cart lastAddedCart = cartService.save(order.getCart());

            // for every added product saving id's in cart_products table
            lastAddedProducts.forEach(product ->
                    cartService.saveInCart_Products(lastAddedCart.getId(), product.getId()));

            // passing used cart_id to order
            order.getCart().setId(lastAddedCart.getId());
            orderService.save(order);

            return new ResponseEntity(null, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
