package com.example.vertragsdb.service;

import com.example.vertragsdb.model.Vertrag;

import java.util.List;
import java.util.Optional;

public interface VertragService {
    public void createVertrag(Vertrag vertrag);

    public Optional<Vertrag> getVertragById(String id);

    public List<Vertrag> getAllVerträge();

    public void updateVertrag(Vertrag vertrag);

    public void deleteVertrag(String id);
}
