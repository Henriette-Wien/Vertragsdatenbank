package com.example.vertragsdb.service;

import com.example.vertragsdb.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.Serializable;

/**
 * Service-Klasse enthält die Geschäftslogik
 */
@Service
public class VertragService implements Serializable {

    @Autowired
    private VertragRepository vertragRepository;

    public VertragRepository getVertragRepository() {
        return vertragRepository;
    }

}
