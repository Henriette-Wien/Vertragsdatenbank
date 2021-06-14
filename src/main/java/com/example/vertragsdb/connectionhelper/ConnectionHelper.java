package com.example.vertragsdb.connectionhelper;


import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

public class ConnectionHelper {
    MongoClient mongoClient = MongoClients.create(
            "mongodb+srv://sp5pl:sp5@vertragsdatenbank.ihvcb.mongodb.net/Vertragsdatenbank?retryWrites=true&w=majority");
    MongoDatabase database = mongoClient.getDatabase("Vertragsdatenbank");
    MongoCollection<Document> vertrag = database.getCollection("vertrag");


}
