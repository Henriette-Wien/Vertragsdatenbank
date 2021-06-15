package com.example.vertragsdb.connectionhelper;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
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
   /* @Bean
    public MongoDbFactory mongoDbFactory()
    {
        MongoClient mongoClient = new MongoClient(mongodb+srv://sp5pl:sp5@vertragsdatenbank.ihvcb.mongodb.net/Vertragsdatenbank?retryWrites=true&w=majority");
        return new SimpleMongoDbFactory(mongoClient, "mydb");
    }

    @Bean
    public MongoTemplate mongoTemplate()
    {
        MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
        return mongoTemplate;
}
*/

}