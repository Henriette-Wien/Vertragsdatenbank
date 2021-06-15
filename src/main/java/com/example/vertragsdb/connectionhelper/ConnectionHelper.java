package com.example.vertragsdb.connectionhelper;


import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDatabaseFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@ComponentScan
@EnableMongoRepositories
public class ConnectionHelper {
    /*MongoClient mongoClient = MongoClients.create(
            "mongodb+srv://sp5pl:sp5@vertragsdatenbank.ihvcb.mongodb.net/Vertragsdatenbank?retryWrites=true&w=majority");
    MongoDatabase database = mongoClient.getDatabase("Vertragsdatenbank");
    MongoCollection<Document> vertrag = database.getCollection("vertrag");
*/
    @Bean
    public MongoDatabaseFactory mongoDbFactory() {
        MongoClient mongoClient = MongoClients.create(
                "mongodb+srv://sp5pl:sp5@vertragsdatenbank.ihvcb.mongodb.net/Vertragsdatenbank?retryWrites=true&w=majority");
        return new SimpleMongoClientDatabaseFactory(mongoClient, "Vertragsdatenbank");
    }

    @Bean
    public MongoTemplate mongoTemplate()
    {
        MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
        return mongoTemplate;
}


}