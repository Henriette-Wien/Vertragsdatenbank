package com.example.vertragsdatenbank.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Vertragspartner implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private long id = 0L;

    @Column(length = 64)
    @Size(min = 1, max = 64, message = "Der Name muss zwischen einem und 64 Zeichen lang sein.")
    @NotNull(message = "Der Name darf nicht leer sein.")
    private String name = "";

    @Column(length = 250)
    @Size(min = 1, max = 250, message = "Die Anschrift muss zwischen einem und 250 Zeichen lang sein.")
    @NotNull(message = "Die Anschrift darf nicht leer sein.")
    private String anschrift = "";

    @Column(length = 64)
    @Size(min = 1, max = 64, message = "Kontaktperson muss zwischen einem und 250 Zeichen lang sein.")
    @NotNull(message = "Kontaktperson darf nicht leer sein.")
    private String kontaktperson = "";

    @ManyToMany
    List<Vertrag> vertragsliste = new ArrayList<>();


}
