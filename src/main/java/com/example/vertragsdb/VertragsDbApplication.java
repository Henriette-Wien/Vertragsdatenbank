package com.example.vertragsdb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * fast and hassle-free Spring Boot build
 */

@SpringBootApplication
@ComponentScan({"com"})
@EnableMongoRepositories({"com.example.vertragsdb.repository"})
public class VertragsDbApplication {

    public static void main(String[] args) {
        SpringApplication.run(VertragsDbApplication.class, args);
    }

}
