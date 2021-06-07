package com.example.vertragsdatenbank.repository;

import com.example.vertragsdatenbank.model.Vertrag;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/**
 * Einfaches Spring Data REST Repository, das den Zugriff auf Vertrag über
 * den REST-Webservice erlaubt.Spring erzeugt automatisch
 * eine abgeleitete Klasse mit den üblichen Methoden zum Lesen, Schreiben und
 * Löschen von Einträgen.
 */


@RepositoryRestResource(collectionResourceRel = "vertrag", path = "vertrag")
public interface VertragRepository extends PagingAndSortingRepository<Vertrag, Long> {


    List<Vertrag> findByName(@Param("name") String name);

    List<Vertrag> findById(@Param("id") long id);

    List<Vertrag> findByAnsprechperson(@Param("ansprechperson") String ansprechperson);

}

