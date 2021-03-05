package com.online.musicshop.models;

import javax.persistence.*;

@Entity
@Table(name = "product_in_stock")
public class ProductInStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String producerName;

    private String modelName;

    private String imageURL;

    private Long stock;

    private Long price;

    @ManyToOne
    private Category category;

    public ProductInStock() {
    }

    public ProductInStock(String producerName,
                          String modelName,
                          String imageURL,
                          Long stock,
                          Long price,
                          Category category) {
        this.producerName = producerName;
        this.modelName = modelName;
        this.imageURL = imageURL;
        this.stock = stock;
        this.price = price;
        this.category = category;
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

    public Long getStock() {
        return stock;
    }

    public void setStock(Long stock) {
        this.stock = stock;
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

    @Override
    public String toString() {
        return "ProductInStock{" +
                "id=" + id +
                ", producerName='" + producerName + '\'' +
                ", modelName='" + modelName + '\'' +
                ", imageURL='" + imageURL + '\'' +
                ", stock=" + stock +
                ", price=" + price +
                ", category=" + category +
                '}';
    }
}
