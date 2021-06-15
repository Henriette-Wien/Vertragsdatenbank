package com.example.vertragsdb.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HTTP REST-Controller für einen einfachen Webservice mit Dependency Injection der Service-Klasse
 */

@RestController
@RequestMapping("${spring.data.rest.basePath}/vertrag/{id}")
public class VertragController {

/*
    private final VertragRepository vertragRepository;

    public VertragController(VertragRepository vertragRepository){this.vertragRepository = vertragRepository;}

    @PostMapping("/vertrag")
    public Vertrag saveVertrag(@RequestBody Vertrag vertrag) {return vertragRepository.save(vertrag);}


   @GetMapping("/vertrag/{id}")
    public VertragRepository getVertrag(@PathVariable ObjectId id) {
        return vertragRepository.findById(id);
    }

    @GetMapping
    public List<Vertrag> getAllVerträge(){

    }*/

}

