package com.exemplo.exercicio1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, world";
    }
    
    @GetMapping("/soma/{num1}/{num2}")
    public String soma(@PathVariable Long num1, @PathVariable Long num2) {
        Long resultado = num1 + num2;
        return "resultado da soma " + num1 + " e " + num2  + " é igual a " + resultado;
    }
    
}
