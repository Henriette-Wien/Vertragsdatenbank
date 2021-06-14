package com.example.vertragsdb.controller;

import com.example.vertragsdb.repository.VertragRepository;
import com.example.vertragsdb.service.VertragService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public VertragRepository getVertrag(@PathVariable ObjectId id) {
        return vertragService.getVertragRepository();
    }


}

