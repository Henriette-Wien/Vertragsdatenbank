package com.example.vertragsdb.service;

import com.example.vertragsdb.model.Vertrag;
import com.example.vertragsdb.repository.VertragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service-Klasse enthält die Geschäftslogik
 */
@Service
public class VertragServiceImpl implements VertragService {

    @Autowired
    private VertragRepository vertragRepository;

    public VertragRepository getVertragRepository() {
        return vertragRepository;
    }

    @Override
    public void createVertrag(Vertrag vertrag) {
        vertragRepository.insert(vertrag);
    }

    @Override
    public Optional<Vertrag> getVertragById(String id) {
        return vertragRepository.findById(id);
    }

    @Override
    public List<Vertrag> getAllVerträge() {
        return vertragRepository.findAll();
    }

    @Override
    public void updateVertrag(Vertrag vertrag) {
        vertragRepository.save(vertrag);
    }

    @Override
    public void deleteVertrag(String id) {
        vertragRepository.deleteById(id);
    }
}
