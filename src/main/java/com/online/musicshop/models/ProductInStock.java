package com.online.musicshop.models;

import javax.persistence.*;

@Entity
public class ProductInStock {
    
//    id, producentName, modelName, imageURL, stock, price, category
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String producentName;

    private String modelName;

    private String imageURL;

    private Integer stock;

    private Long price;

    @ManyToOne
    private Category category;

}
