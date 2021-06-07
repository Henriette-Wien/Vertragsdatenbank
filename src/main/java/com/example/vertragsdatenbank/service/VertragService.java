package com.example.vertragsdatenbank.service;

import com.example.vertragsdatenbank.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;

/**
 * Service-Klasse enthält die Geschäftslogik
 */
public class VertragService implements Serializable {

    @Autowired
    private VertragRepository vertragRepository;

    public VertragRepository getVertragRepository() {
        return vertragRepository;
    }
}
