package com.countryval.CountryVal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.countryval.CountryVal.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
}
