package com.salesianostriana.model;

import javax.persistence.Embeddable;

@Embeddable
public class Direccion {

	private String calle;
	private String cp;
	private String poblacion;
	private String provincia;
	
	public Direccion() {}

	public Direccion(String calle, String cp, String poblacion, String provincia) {
		super();
		this.calle = calle;
		this.cp = cp;
		this.poblacion = poblacion;
		this.provincia = provincia;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public String getCp() {
		return cp;
	}

	public void setCp(String cp) {
		this.cp = cp;
	}

	public String getPoblacion() {
		return poblacion;
	}

	public void setPoblacion(String poblacion) {
		this.poblacion = poblacion;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	};
	
	
}
