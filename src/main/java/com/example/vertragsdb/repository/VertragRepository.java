package com.example.vertragsdb.repository;

import com.example.vertragsdb.model.Vertrag;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;


/**
 * repository to interact with Tutorials from the database.
 * In repository package, create VertragRepository interface that extends MongoRepository
 *
 * Enables use of MongoRepository’s methods:
 * save(), findOne(), findById(),
 * findAll(), count(), delete(), deleteById()…
 * without implementing these methods.
 *
 * Implementation of custom methods
 * e.g. findByArchiviert()
 *
 * filter methods
 */

@RepositoryRestResource(collectionResourceRel = "vertrag", path = "vertrag")
public interface VertragRepository extends MongoRepository<Vertrag, String> { }
