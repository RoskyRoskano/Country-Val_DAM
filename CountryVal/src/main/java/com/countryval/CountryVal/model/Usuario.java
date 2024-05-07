package com.countryval.CountryVal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Usuario {
    @Id
    private Long id;
    private String nombre;
    private String correo;
}

