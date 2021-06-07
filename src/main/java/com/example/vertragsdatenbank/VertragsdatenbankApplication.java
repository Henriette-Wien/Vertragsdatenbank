package com.example.vertragsdatenbank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hauptklasse der Anwendung. Hier wird von Spring automatisch ein eingebetteter
 * Webserver gestartet, unter dem die Webservices erreichbar sind.
 */
@SpringBootApplication
public class VertragsdatenbankApplication {

    public static void main(String[] args) {
        SpringApplication.run(VertragsdatenbankApplication.class, args);
    }

}
