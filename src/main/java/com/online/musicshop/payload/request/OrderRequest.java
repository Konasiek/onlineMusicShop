package com.online.musicshop.payload.request;

import com.online.musicshop.models.Order;
import com.online.musicshop.models.ProductInOrder;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class OrderRequest {

    @NotBlank
    private List<ProductInOrder> productsInOrder;

    @NotBlank
    private Order order;


    public List<ProductInOrder> getProductsInOrder() {
        return productsInOrder;
    }

    public void setProductsInOrder(List<ProductInOrder> productsInOrder) {
        this.productsInOrder = productsInOrder;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public OrderRequest(List<ProductInOrder> productsInOrder, Order order) {
        this.productsInOrder = productsInOrder;
        this.order = order;
    }

    @Override
    public String toString() {
        return "OrderRequest{" +
                "productsInOrder=" + productsInOrder +
                ", order=" + order +
                '}';
    }
}
