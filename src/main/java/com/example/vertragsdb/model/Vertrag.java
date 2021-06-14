package com.example.vertragsdb.model;

import javax.persistence.Id;
import java.util.Date;

public class Vertrag {

    @Id
    private String id;
    private String name;
    private char laufzeit;
    private String bedingungen;
    private String ansprechperson;
    private Date abschlussdatum;


    /**
     * Default-Konstruktor
     */
    public Vertrag() {

    }

}
