package com.example.ShoppingCartAppBE.controllers;

import com.example.ShoppingCartAppBE.dtos.ProductDto;
import com.example.ShoppingCartAppBE.models.Product;
import com.example.ShoppingCartAppBE.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @PostMapping
    public ResponseEntity<Integer> saveProduct(@RequestBody ProductDto productDto){
        Integer id = productService.saveProduct(productDto);
        return ResponseEntity.created(URI.create("/products/" + id)).body(id);
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> product = productService.getAllProduct();
        return ResponseEntity.ok(product);
    }
}
