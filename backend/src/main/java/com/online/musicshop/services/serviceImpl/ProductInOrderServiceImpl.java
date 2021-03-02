package com.online.musicshop.services.serviceImpl;

import com.online.musicshop.models.ProductInOrder;
import com.online.musicshop.repository.ProductInOrderRepository;
import com.online.musicshop.services.ProductInOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductInOrderServiceImpl implements ProductInOrderService {

    private ProductInOrderRepository productInOrderRepository;

    @Autowired
    public ProductInOrderServiceImpl(ProductInOrderRepository productInOrderRepository) {
        this.productInOrderRepository = productInOrderRepository;
    }

    @Override
    public List<ProductInOrder> saveAll(List<ProductInOrder> productInOrders) {
        return productInOrderRepository.saveAll(productInOrders);
    }
}
