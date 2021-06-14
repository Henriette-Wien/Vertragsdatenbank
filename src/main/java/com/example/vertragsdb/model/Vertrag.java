package com.example.vertragsdb.model;


import org.springframework.data.annotation.Id;

import java.util.Date;

public class Vertrag {

    @Id
    private String id;
    private Date abschlussdatum;
    private String ansprechperson;
    private String name;
    private char laufzeit;
    private String bedingungen;


    /**
     * Default-Konstruktor
     */
    public Vertrag() {

    }

}
