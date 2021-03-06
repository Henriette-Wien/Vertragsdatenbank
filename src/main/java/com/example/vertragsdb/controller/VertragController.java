package com.example.vertragsdb.controller;

import com.example.vertragsdb.model.Vertrag;
import com.example.vertragsdb.service.VertragServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * RestController which has request mapping methods for RESTful requests such as:
 * getAllVertraege, saveVertrag, getVertrag, updateVertrag, deleteVertragâ€¦
 */

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping()
public class VertragController {

    @Autowired
    private VertragServiceImpl vertragService;

    @GetMapping("/vertrag")
    public List<Vertrag> getAllVertraege() {
        return this.vertragService.getAllVertraege();
    }

    @PostMapping("/vertrag")
    public void saveVertrag(@RequestBody Vertrag vertrag) {
        this.vertragService.createVertrag(vertrag);
    }


    @GetMapping("/vertrag/{id}")
    public Optional<Vertrag> getVertrag(@PathVariable String id) {
        return this.vertragService.getVertragById(id);
    }

    @PutMapping("/vertrag/{id}")
    public void updateVertrag(@PathVariable String id, @RequestBody Vertrag vertrag) {
        vertrag.setId(id);
        this.vertragService.updateVertrag(vertrag);
    }

    @DeleteMapping("/vertrag/{id}")
    public void deleteVertrag(@PathVariable String id) {
        this.vertragService.deleteVertrag(id);
    }

}

