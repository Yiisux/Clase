package com.salesianostriana;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.salesianostriana.pojo.Campania;
import com.salesianostriana.pojo.Usuario;
import com.salesianostriana.repository.CampaniaRepository;
import com.salesianostriana.repository.UsuarioRepository;

@SpringBootApplication
public class ApiCampaniasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiCampaniasApplication.class, args);
	}
	
	@Bean
    public CommandLineRunner demo(CampaniaRepository repo, UsuarioRepository repoUsuario) {
        return (args) -> {
        	
        	repo.save(new Campania("KILO", "CAMPAÑA DEL KILO", "RECOGER KILOS DE COMIDA Y BEBIDA", LocalDate.of(2017, 11, 1), LocalDate.of(2017, 11, 29)));
  
            repoUsuario.save(new Usuario("Administrador", true, "jesus@gmail.com", "hola", "2DAM"));	
               
               

        };
    }
}
