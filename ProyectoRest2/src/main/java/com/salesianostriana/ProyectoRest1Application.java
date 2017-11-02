package com.salesianostriana;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.salesianostriana.model.Direccion;
import com.salesianostriana.model.Persona;
import com.salesianostriana.repository.PersonaRepository;

@SpringBootApplication
public class ProyectoRest1Application {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoRest1Application.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(PersonaRepository repository) {
		return (args) -> {
			
			repository.save((new Persona("Pedro", "Picapiedra", new Direccion("Mairena blo 20", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Jesus", "Arteaga", new Direccion("Rue del perceber, 13", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Pepe", "Grillo", new Direccion("Manuel de noseque 20", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Pepa", "Pig", new Direccion("Alcores", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Pedro", "Marmol", new Direccion("San juan", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Jesus", "Grillo", new Direccion("Mairena blo 20", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Laura", "Picapiedra", new Direccion("Mairena blo 20", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Tamara", "Pig", new Direccion("Alcores", "42938", "sevilla", "sevilla"))));
			repository.save((new Persona("Laura", "Garrido", new Direccion("Mairena blo 22", "42938", "sevilla", "sevilla"))));






			
		};
	}
}
