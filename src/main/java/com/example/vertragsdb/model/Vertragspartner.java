package com.example.vertragsdb.model;

public class Vertragspartner {
    private String name;
    private Anschrift anschrift;
    private Ansprechpartner ansprechpartner;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Anschrift getAnschrift() {
        return anschrift;
    }

    public void setAnschrift(Anschrift anschrift) {
        this.anschrift = anschrift;
    }

    public Ansprechpartner getAnsprechpartner() {
        return ansprechpartner;
    }

    public void setAnsprechpartner(Ansprechpartner ansprechpartner) {
        this.ansprechpartner = ansprechpartner;
    }
}
