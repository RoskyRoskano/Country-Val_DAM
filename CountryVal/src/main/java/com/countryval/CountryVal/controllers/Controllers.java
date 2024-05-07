package com.countryval.CountryVal.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.countryval.CountryVal.model.Usuario;
import com.countryval.CountryVal.repository.UsuarioRepository;

@RestController 
@RequestMapping("/api/usuarios")
public class Controllers {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping("crear")
    public Usuario crearUsuario(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }
}
