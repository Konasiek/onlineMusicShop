package com.online.musicshop.models;

import javax.persistence.*;

@Entity
@Table(name = "product_in_order")
public class ProductInOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String producerName;

    private String modelName;

    private String imageURL;

    private Long price;

    @ManyToOne
    private Category category;

    private Long quantity;

    public ProductInOrder() {
    }

    public ProductInOrder(String producerName,
                          String modelName,
                          String imageURL,
                          Long price,
                          Category category,
                          Long quantity) {
        this.producerName = producerName;
        this.modelName = modelName;
        this.imageURL = imageURL;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProducerName() {
        return producerName;
    }

    public void setProducerName(String producerName) {
        this.producerName = producerName;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "ProductInOrder{" +
                "id=" + id +
                ", producerName='" + producerName + '\'' +
                ", modelName='" + modelName + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", price=" + price +
                ", category=" + category +
                ", quantity=" + quantity +
                '}';
    }
}
