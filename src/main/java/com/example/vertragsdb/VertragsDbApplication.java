package com.example.vertragsdb;

import com.example.vertragsdb.connectionhelper.ConnectionHelper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@ComponentScan({"com"})
@EnableMongoRepositories({"com.example.vertragsdb.repository"})
public class VertragsDbApplication {

    public static void main(String[] args) {
        SpringApplication.run(VertragsDbApplication.class, args);
    }

   ConnectionHelper connectionHelper = new ConnectionHelper();
}
