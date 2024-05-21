package com.countryval.CountryVal.model;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Data
@Entity
@Table(name = "usuarios")
public class Usuario {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private String email;
    private Long id;
    private String nombre;
    private String nombreusuario;
    private String contrasena;
    private int recordFacil;
    private int RecordDificil;
}

