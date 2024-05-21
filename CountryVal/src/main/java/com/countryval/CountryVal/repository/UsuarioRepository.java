package com.countryval.CountryVal.repository;

import com.countryval.CountryVal.model.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String> {

}