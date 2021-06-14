package com.example.vertragsdb.model;


import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

import java.util.Date;

public class Vertrag {

    @Id
    private ObjectId id;
    private Date abschlussdatum;
    private String ansprechperson;
    private String bedingungen;
    private String kosten;
    private String laufzeit;
    private String name;
    private String status;
    private Object vertragspartner;


    /**
     * Default-Konstruktor
     */
    public Vertrag() {

    }

}
