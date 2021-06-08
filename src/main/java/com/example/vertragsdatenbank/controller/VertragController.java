package com.example.vertragsdatenbank.controller;

import com.example.vertragsdatenbank.repository.VertragRepository;
import com.example.vertragsdatenbank.service.VertragService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HTTP REST-Controller für einen einfachen Webservice mit Dependency Injection der Service-Klasse
 */

@RestController
@RequestMapping("${spring.data.rest.basePath}/vertrag/{id}")
public class VertragController {
    // Dependency-Injection der Service-Klasse
    @Autowired
    protected VertragService vertragService;

    @GetMapping
    public VertragRepository getVertrag() {
        return vertragService.getVertragRepository();
    }
}

