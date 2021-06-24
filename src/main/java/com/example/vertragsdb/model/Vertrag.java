package com.example.vertragsdb.model;

/**
 * data model class corresponds to entity and table Vertrag
 */

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "vertrag")
public class Vertrag {

    @Id
    private String id;
    private Date abschlussdatum;
    private String ansprechperson;
    private String bedingungen;
    private String kosten;
    private String laufzeit;
    private String name;
    private String status;
    private Vertragspartner vertragspartner;


    public Vertragspartner getVertragspartner() {
        return vertragspartner;
    }

    public void setVertragspartner(Vertragspartner vertragspartner) {
        this.vertragspartner = vertragspartner;
    }


    /**
     * Default-Konstruktor
     */
    public Vertrag() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getAbschlussdatum() {
        return abschlussdatum;
    }

    public void setAbschlussdatum(Date abschlussdatum) {
        this.abschlussdatum = abschlussdatum;
    }

    public String getAnsprechperson() {
        return ansprechperson;
    }

    public void setAnsprechperson(String ansprechperson) {
        this.ansprechperson = ansprechperson;
    }

    public String getBedingungen() {
        return bedingungen;
    }

    public void setBedingungen(String bedingungen) {
        this.bedingungen = bedingungen;
    }

    public String getKosten() {
        return kosten;
    }

    public void setKosten(String kosten) {
        this.kosten = kosten;
    }

    public String getLaufzeit() {
        return laufzeit;
    }

    public void setLaufzeit(String laufzeit) {
        this.laufzeit = laufzeit;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
