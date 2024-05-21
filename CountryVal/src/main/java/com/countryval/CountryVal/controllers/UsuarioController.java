package com.countryval.CountryVal.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Optional;
import com.countryval.CountryVal.model.Usuario;
import com.countryval.CountryVal.service.UsuarioService;

@RestController
@RequestMapping(path = "/usuarios")
public class UsuarioController {

    @Autowired
    private  UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAll(){
        return usuarioService.getUsuarios();
    }

    @GetMapping("/{email}")
    public Optional<Usuario> getById(@PathVariable("email") String email){
        return usuarioService.getUsuario(email);
    }

    @GetMapping
    public void saveOrUpdate(@RequestBody Usuario usuario){
        usuarioService.saveOrUpdate(usuario);
    }

    @DeleteMapping("/{email}")
    public void deleteUsuario(@PathVariable("email") String email){
        usuarioService.delete(email);
    }

}
