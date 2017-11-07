package com.salesianostriana.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class DatoMaestro {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_Dmaestro;
	
	private String nombre;
	private double cantidad;
	
	@OneToMany(mappedBy="datoMaestro" , cascade = CascadeType.ALL) 
	private Campania campania;
	
	public DatoMaestro() {
		
	}
	
	public DatoMaestro(String nombre, double cantidad) {
		super();
		this.nombre = nombre;
		this.cantidad = cantidad;
	}

	public long getId_Dmaestro() {
		return id_Dmaestro;
	}

	public void setId_Dmaestro(long id_Dmaestro) {
		this.id_Dmaestro = id_Dmaestro;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
		this.cantidad = cantidad;
	}

	public Campania getCampania() {
		return campania;
	}

	public void setCampania(Campania campania) {
		this.campania = campania;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((campania == null) ? 0 : campania.hashCode());
		long temp;
		temp = Double.doubleToLongBits(cantidad);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (int) (id_Dmaestro ^ (id_Dmaestro >>> 32));
		result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DatoMaestro other = (DatoMaestro) obj;
		if (campania == null) {
			if (other.campania != null)
				return false;
		} else if (!campania.equals(other.campania))
			return false;
		if (Double.doubleToLongBits(cantidad) != Double.doubleToLongBits(other.cantidad))
			return false;
		if (id_Dmaestro != other.id_Dmaestro)
			return false;
		if (nombre == null) {
			if (other.nombre != null)
				return false;
		} else if (!nombre.equals(other.nombre))
			return false;
		return true;
	}
	
	
}
