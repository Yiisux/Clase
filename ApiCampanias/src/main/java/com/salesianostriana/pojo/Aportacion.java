package com.salesianostriana.pojo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Aportacion {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_apotaciones;
	
	
	private long id_DatoMaestro;
	private double cantidad;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Campania campania;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private Usuario usuario;

	public Aportacion(){
		
	}
	public Aportacion(long id_DatoMaestro, double cantidad) {
		super();
		this.id_DatoMaestro = id_DatoMaestro;
		this.cantidad = cantidad;
	}
	public long getId_apotaciones() {
		return id_apotaciones;
	}
	public void setId_apotaciones(long id_apotaciones) {
		this.id_apotaciones = id_apotaciones;
	}
	public long getId_DatoMaestro() {
		return id_DatoMaestro;
	}
	public void setId_DatoMaestro(long id_DatoMaestro) {
		this.id_DatoMaestro = id_DatoMaestro;
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
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((campania == null) ? 0 : campania.hashCode());
		long temp;
		temp = Double.doubleToLongBits(cantidad);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + (int) (id_DatoMaestro ^ (id_DatoMaestro >>> 32));
		result = prime * result + (int) (id_apotaciones ^ (id_apotaciones >>> 32));
		result = prime * result + ((usuario == null) ? 0 : usuario.hashCode());
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
		Aportacion other = (Aportacion) obj;
		if (campania == null) {
			if (other.campania != null)
				return false;
		} else if (!campania.equals(other.campania))
			return false;
		if (Double.doubleToLongBits(cantidad) != Double.doubleToLongBits(other.cantidad))
			return false;
		if (id_DatoMaestro != other.id_DatoMaestro)
			return false;
		if (id_apotaciones != other.id_apotaciones)
			return false;
		if (usuario == null) {
			if (other.usuario != null)
				return false;
		} else if (!usuario.equals(other.usuario))
			return false;
		return true;
	}
	
	
	
	
	
	
	
}
