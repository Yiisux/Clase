package com.salesianostriana.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.salesianostriana.error.PersonaSinDatosException;
import com.salesianostriana.model.Persona;
import com.salesianostriana.service.PersonaService;

@RestController
public class WelcomeController {

	@Autowired
	PersonaService personaService;
	
	@GetMapping("/personas")
	public List<Persona> obtenerTodasLasPersonas() {
		return personaService.findAll();
	}
	
	@GetMapping("/buscarPorNombres/{nombre}")
	public List<Persona> obtenerPersonasConEsteNombre(@PathVariable("nombre") String nombre){
		return personaService.buscarPorNombre(nombre);
		
	}
	
	@GetMapping("/buscarPorApellidos/{apellidos}")
	public List<Persona> obtenerPersonasConEsteApellido(@PathVariable("apellidos") String apellidos){
		return personaService.buscarPorApellidos(apellidos);
	}
	
	@GetMapping("/BuscarPorNombreYApellidos/{nombre}/{apellidos}")
	public List<Persona> obtenerPersonasConEsteNombreCompleto(@PathVariable("nombre") String nombre, @PathVariable("apellidos")String apellidos){
		return personaService.buscarPorNombreAndApellidos(nombre, apellidos);
	}
	
	
	@GetMapping("/persona/{id}")
	public Persona obtenerUnaPersona(@PathVariable("id") Long id) {
		return personaService.findOne(id);
	}
	
	@PostMapping("/persona")
	public Persona crearUnaPersona(@RequestBody Persona pers, HttpServletResponse response) {
		if(pers.getNombre() != null && pers.getApellidos() != null) {
			response.setStatus(201);
			return personaService.save(pers);
		}else {
			response.setStatus(400);
			return null;
		}
		
	}
	
	
	
	@PutMapping("/persona")
	public Persona editarUnaPersona(@RequestBody Persona p) {
		if(personaService.findOne(p.getId()) != null) {
			return personaService.edit(p);
		}else {
		return null;
		}
	}
	
	@DeleteMapping("/persona")
	public Persona borrarUnaPersona(@RequestBody Persona p) {
		personaService.delete(p.getId());
		return null;
	}
	
}
