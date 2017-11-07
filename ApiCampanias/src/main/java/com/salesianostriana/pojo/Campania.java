package com.salesianostriana.pojo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Campania {


	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_campania;
	private String clave;
	private String nombre;
	private String causa;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate fechaInicio;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate fechaFinal;
	
	@OneToMany(mappedBy="campania" , cascade = CascadeType.ALL) 
	private List<Aportacion> aportacion = new ArrayList<Aportacion>();
	
	@OneToMany(mappedBy="campania" , cascade = CascadeType.ALL) 
	private List<DatoMaestro> datoMaestro = new ArrayList<DatoMaestro>();
	
	@ManyToMany(mappedBy="campania" , cascade = CascadeType.ALL)
	private List<Usuario> usuario = new ArrayList<Usuario>();

	public Campania() {
		
	}
	public Campania(String clave, String nombre, String causa, LocalDate fechaInicio, LocalDate fechaFinal) {
		super();
		this.clave = clave;
		this.nombre = nombre;
		this.causa = causa;
		this.fechaInicio = fechaInicio;
		this.fechaFinal = fechaFinal;

	}
	public String getClave() {
		return clave;
	}
	public void setClave(String clave) {
		this.clave = clave;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCausa() {
		return causa;
	}
	public void setCausa(String causa) {
		this.causa = causa;
	}
	public LocalDate getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(LocalDate fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public LocalDate getFechaFinal() {
		return fechaFinal;
	}
	public void setFechaFinal(LocalDate fechaFinal) {
		this.fechaFinal = fechaFinal;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((aportacion == null) ? 0 : aportacion.hashCode());
		result = prime * result + ((causa == null) ? 0 : causa.hashCode());
		result = prime * result + ((clave == null) ? 0 : clave.hashCode());
		result = prime * result + ((datoMaestro == null) ? 0 : datoMaestro.hashCode());
		result = prime * result + ((fechaFinal == null) ? 0 : fechaFinal.hashCode());
		result = prime * result + ((fechaInicio == null) ? 0 : fechaInicio.hashCode());
		result = prime * result + (int) (id_campania ^ (id_campania >>> 32));
		result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
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
		Campania other = (Campania) obj;
		if (aportacion == null) {
			if (other.aportacion != null)
				return false;
		} else if (!aportacion.equals(other.aportacion))
			return false;
		if (causa == null) {
			if (other.causa != null)
				return false;
		} else if (!causa.equals(other.causa))
			return false;
		if (clave == null) {
			if (other.clave != null)
				return false;
		} else if (!clave.equals(other.clave))
			return false;
		if (datoMaestro == null) {
			if (other.datoMaestro != null)
				return false;
		} else if (!datoMaestro.equals(other.datoMaestro))
			return false;
		if (fechaFinal == null) {
			if (other.fechaFinal != null)
				return false;
		} else if (!fechaFinal.equals(other.fechaFinal))
			return false;
		if (fechaInicio == null) {
			if (other.fechaInicio != null)
				return false;
		} else if (!fechaInicio.equals(other.fechaInicio))
			return false;
		if (id_campania != other.id_campania)
			return false;
		if (nombre == null) {
			if (other.nombre != null)
				return false;
		} else if (!nombre.equals(other.nombre))
			return false;
		if (usuario == null) {
			if (other.usuario != null)
				return false;
		} else if (!usuario.equals(other.usuario))
			return false;
		return true;
	}
	
	
}
