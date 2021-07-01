package com.example.vertragsdb.connectionhelper;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * configure spring data mongo db
 *
 */

@Configuration
@ComponentScan
@EnableMongoRepositories
public class ConnectionHelper {

    @Bean
    public MongoDatabaseFactory mongoDbFactory() {
        MongoClient mongoClient = MongoClients.create(
                "mongodb+srv://sp5pl:sp5@vertragsdatenbank.ihvcb.mongodb.net/Vertragsdatenbank?retryWrites=true&w=majority");
        return new SimpleMongoClientDatabaseFactory(mongoClient, "Vertragsdatenbank");
    }


}