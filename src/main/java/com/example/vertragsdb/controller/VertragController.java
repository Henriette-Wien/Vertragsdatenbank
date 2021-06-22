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

    @GetMapping("")
    public List<Vertrag> getAllVertraege() {
        return this.vertragService.getAllVertraege();
    }


    /*public VertragController(VertragRepository vertragRepository) {
        this.vertragRepository = vertragRepository;
    }

    @PostMapping("/vertrag")
    public Vertrag saveVertrag(@RequestBody Vertrag vertrag) {
        return vertragRepository.save(vertrag);
    }



    @GetMapping("/vertrag/{id}")
    public Optional<Vertrag> getVertrag(@PathVariable String id) {
        return vertragRepository.findById(id);
    }

    @PutMapping("/vertrag/{id}")
    public Vertrag updateVertrag(@PathVariable String id, @RequestBody Vertrag vertrag) {
        vertrag.setId(id);
        return vertragRepository.save(vertrag);
    }

    @DeleteMapping("/vertrag/{id}")
    public void deleteVertrag(@PathVariable String id) {
        vertragRepository.deleteById(id);
    }
     */

}

