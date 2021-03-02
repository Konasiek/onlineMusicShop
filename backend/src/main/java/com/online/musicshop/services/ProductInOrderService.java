package com.online.musicshop.services;

import com.online.musicshop.models.ProductInOrder;

import java.util.List;

public interface ProductInOrderService {

    List<ProductInOrder> saveAll(List<ProductInOrder> productInOrders);
}
