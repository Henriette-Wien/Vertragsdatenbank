package com.example.vertragsdb.controller;

import com.example.vertragsdb.model.Vertrag;
import com.example.vertragsdb.repository.VertragRepository;
import com.example.vertragsdb.service.VertragServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * HTTP REST-Controller für einen einfachen Webservice mit Dependency Injection der Service-Klasse
 */

@RestController
@RequestMapping("${spring.data.rest.basePath}")
public class VertragController {

    @Autowired
    private VertragServiceImpl vertragService;

    @GetMapping()
    public List<Vertrag> getAllVertraege() {
        return this.vertragService.getAllVertraege();
    }

    @PostMapping()
    public void saveVertrag(@RequestBody Vertrag vertrag) {
        this.vertragService.createVertrag(vertrag);
    }


    @GetMapping("/{id}")
    public Optional<Vertrag> getVertrag(@PathVariable String id) {
        return this.vertragService.getVertragById(id);
    }

    @PutMapping("/{id}")
    public void updateVertrag(@PathVariable String id, @RequestBody Vertrag vertrag) {
        vertrag.setId(id);
        this.vertragService.updateVertrag(vertrag);
    }

    @DeleteMapping("/{id}")
    public void deleteVertrag(@PathVariable String id) {
        this.vertragService.deleteVertrag(id);
    }

}

