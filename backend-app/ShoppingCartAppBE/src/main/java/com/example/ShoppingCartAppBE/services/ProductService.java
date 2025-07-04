package com.example.ShoppingCartAppBE.services;

import com.example.ShoppingCartAppBE.dtos.ProductDto;
import com.example.ShoppingCartAppBE.models.Product;
import com.example.ShoppingCartAppBE.repositories.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    public Integer saveProduct(ProductDto productDto){
        Product newProduct = new Product(productDto.getName(), productDto.getPrice(), productDto.getProductSizes());
        return productRepository.save(newProduct).getId();
    }

    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }
}
