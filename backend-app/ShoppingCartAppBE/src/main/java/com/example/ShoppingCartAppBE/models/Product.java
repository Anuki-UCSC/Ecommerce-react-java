package com.example.ShoppingCartAppBE.models;

import com.example.ShoppingCartAppBE.enums.ProductSize;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private int price;
    private List<ProductSize> productSizes;

    public Product() {
    }
    public Product(String name, int price, List<ProductSize> productSizes){
        this.name = name;
        this.price = price;
        this.productSizes = productSizes;
    }
    public Integer getId(){
        return id;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setProductSizes(List<ProductSize> productSizes) {
        this.productSizes = productSizes;
    }

    public String getName() {
        return name;
    }

    public int getPrice() {
        return price;
    }

    public List<ProductSize> getProductSizes() {
        return productSizes;
    }

}
