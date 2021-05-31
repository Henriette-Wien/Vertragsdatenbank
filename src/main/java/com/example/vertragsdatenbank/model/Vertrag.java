package com.example.vertragsdatenbank.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
public class Vertrag implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private long id = 0L;

    @Column(length = 64)
    @Size(min = 1, max = 64, message = "Der Name muss zwischen einem und 64 Zeichen lang sein.")
    @NotNull(message = "Der Name darf nicht leer sein.")
    private String name = "";

    @Column(length = 64)
    @Size(min = 1, max = 64, message = "Laufzeit muss zwischen einem und 64 Zeichen lang sein.")
    @NotNull(message = "Laufzeit darf nicht leer sein.")
    private char laufzeit;

    @Column()
    @NotNull(message = "Bedingungen darf nicht leer sein.")
    private String bedingungen = " ";

    @Column(length = 64)
    @Size(min = 1, max = 64, message = "Der Name der Ansprechperson muss zwischen einem und 64 Zeichen lang sein.")
    @NotNull(message = "Das Feld Ansprechperson darf nicht leer sein.")
    private String ansprechperson = "";

    @Column(length = 64)
    @NotNull(message = "Der Name darf nicht leer sein.")
    private Date abschlussdatum = new Date();


    @ManyToOne
    @JoinColumn(name = "status_ID", nullable = false)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "vertragsart_ID", nullable = false)
    private Vertragsart vertragsart;

    /**
     * Default-Konstruktor
     */
    public Vertrag() {

    }

}
