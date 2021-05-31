package com.example.vertragsdatenbank.model;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Status implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private long status_ID = 0L;

    @Column(length = 64)
    @Size(min = 1, max = 64, message = "Der Name muss zwischen einem und 64 Zeichen lang sein.")
    @NotNull(message = "Der Name darf nicht leer sein.")
    private String name = "";

    @Column(length = 200)
    @Size(min = 1, max = 200, message = "Die Beschreibung muss zwischen einem und 200 Zeichen lang sein.")
    @NotNull(message = "Die Beschreibung darf nicht leer sein.")
    private String beschreibung = "";

    @OneToMany (mappedBy = "status")
    private Set<Vertrag> vertrag;

}
