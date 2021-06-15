package com.example.vertragsdb.repository;

import com.example.vertragsdb.model.Vertrag;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


/**
 * Einfaches Spring Data REST Repository, das den Zugriff auf Vertragsdatenbank über
 * den REST-Webservice erlaubt.Spring erzeugt automatisch
 * eine abgeleitete Klasse mit den üblichen Methoden zum Lesen, Schreiben und
 * Löschen von Einträgen.
 */

@RepositoryRestResource(collectionResourceRel = "vertrag", path = "vertrag")
public interface VertragRepository extends MongoRepository<Vertrag, String> {

    @Override
    List<Vertrag> findAll();

}
