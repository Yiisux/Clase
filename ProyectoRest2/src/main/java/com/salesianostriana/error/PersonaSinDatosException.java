package com.salesianostriana.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="Falta el nombre o los apellidos")
public class PersonaSinDatosException extends RuntimeException {

	
}
