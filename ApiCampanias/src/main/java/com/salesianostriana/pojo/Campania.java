package com.salesianostriana.pojo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
<<<<<<< HEAD
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
=======
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40

@Entity
public class Campania {

<<<<<<< HEAD
	private String id_campania;
	private String nombre;
	private String causa;
	private LocalDate fechaInicio;
	private LocalDate fechaFinal;
	
	@ManyToOne
	DatoMaestro datoMaestro;
=======

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
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
	
	@ManyToMany(mappedBy="campania" , cascade = CascadeType.ALL)
	private List<Usuario> usuario = new ArrayList<Usuario>();

	public Campania() {
		
	}
<<<<<<< HEAD
	public Campania(String id_campania, String nombre, String causa, LocalDate fechaInicio, LocalDate fechaFinal, DatoMaestro datoMaestro) {
		super();
		this.id_campania = id_campania;
=======
	public Campania(String clave, String nombre, String causa, LocalDate fechaInicio, LocalDate fechaFinal) {
		super();
		this.clave = clave;
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
		this.nombre = nombre;
		this.causa = causa;
		this.fechaInicio = fechaInicio;
		this.fechaFinal = fechaFinal;
<<<<<<< HEAD
		this.datoMaestro = datoMaestro;
	}
	public String getId_campania() {
		return id_campania;
	}
	public void setId_campania(String id_campania) {
		this.id_campania = id_campania;
=======

	}
	public String getClave() {
		return clave;
	}
	public void setClave(String clave) {
		this.clave = clave;
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
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
<<<<<<< HEAD
	public DatoMaestro getDatoMaestro() {
		return datoMaestro;
	}
	public void setDatoMaestro(DatoMaestro datoMaestro) {
		this.datoMaestro = datoMaestro;
	}
	public List<Usuario> getUsuario() {
		return usuario;
	}
	public void setUsuario(List<Usuario> usuario) {
		this.usuario = usuario;
	}
=======
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
<<<<<<< HEAD
		result = prime * result + ((causa == null) ? 0 : causa.hashCode());
		result = prime * result + ((datoMaestro == null) ? 0 : datoMaestro.hashCode());
		result = prime * result + ((fechaFinal == null) ? 0 : fechaFinal.hashCode());
		result = prime * result + ((fechaInicio == null) ? 0 : fechaInicio.hashCode());
		result = prime * result + ((id_campania == null) ? 0 : id_campania.hashCode());
=======
		result = prime * result + ((aportacion == null) ? 0 : aportacion.hashCode());
		result = prime * result + ((causa == null) ? 0 : causa.hashCode());
		result = prime * result + ((clave == null) ? 0 : clave.hashCode());
		result = prime * result + ((datoMaestro == null) ? 0 : datoMaestro.hashCode());
		result = prime * result + ((fechaFinal == null) ? 0 : fechaFinal.hashCode());
		result = prime * result + ((fechaInicio == null) ? 0 : fechaInicio.hashCode());
		result = prime * result + (int) (id_campania ^ (id_campania >>> 32));
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
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
<<<<<<< HEAD
=======
		if (aportacion == null) {
			if (other.aportacion != null)
				return false;
		} else if (!aportacion.equals(other.aportacion))
			return false;
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
		if (causa == null) {
			if (other.causa != null)
				return false;
		} else if (!causa.equals(other.causa))
			return false;
<<<<<<< HEAD
=======
		if (clave == null) {
			if (other.clave != null)
				return false;
		} else if (!clave.equals(other.clave))
			return false;
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
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
<<<<<<< HEAD
		if (id_campania == null) {
			if (other.id_campania != null)
				return false;
		} else if (!id_campania.equals(other.id_campania))
=======
		if (id_campania != other.id_campania)
>>>>>>> 47e4b69b279cb2e38c080c53225d989df376cf40
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
