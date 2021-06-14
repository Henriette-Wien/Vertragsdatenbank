package com.example.vertragsdb;

import com.example.vertragsdb.connectionhelper.ConnectionHelper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VertragsDbApplication {

    public static void main(String[] args) {
        SpringApplication.run(VertragsDbApplication.class, args);
    }

   ConnectionHelper connectionHelper = new ConnectionHelper();
}
