package com.salesianostriana.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.salesianostriana.model.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Long> {

	 List<Persona> findByNombre(String nombre);
	 List<Persona> findByApellidos(String apellidos);
	 List<Persona> findByNombreAndApellidos(String nombre, String apellidos);
}
