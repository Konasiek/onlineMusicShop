package com.online.musicshop.services.serviceImpl;

import com.online.musicshop.models.Order;
import com.online.musicshop.repository.OrderRepository;
import com.online.musicshop.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Page<Order> findByUser_IdOrderByIdDesc(Long user_id, Pageable pageable) {
        return orderRepository.findByUser_IdOrderByIdDesc(user_id, pageable);
    }

    @Override
    public void save(Order order) {
        orderRepository.save(order);
    }
}
