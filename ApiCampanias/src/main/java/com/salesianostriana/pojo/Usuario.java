package com.salesianostriana.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_usuario;
	
	private String nombre;
	private boolean administrador;
	private String email;
	private String password;
	private String grupo;
	
	@OneToMany
	private List<Aportacion> aportacion = new ArrayList<Aportacion>();
	
	@ManyToMany
	private List<Campania> campania = new ArrayList<Campania>();
	

	public Usuario() {
		
	}


	


	public Usuario(String nombre, boolean administrador, String email, String password, String grupo) {
		super();
		this.nombre = nombre;
		this.administrador = administrador;
		this.email = email;
		this.password = password;
		this.grupo = grupo;

	}





	public long getId_usuario() {
		return id_usuario;
	}


	public void setId_usuario(long id_usuario) {
		this.id_usuario = id_usuario;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public boolean isAdministrador() {
		return administrador;
	}


	public void setAdministrador(boolean administrador) {
		this.administrador = administrador;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getGrupo() {
		return grupo;
	}


	public void setGrupo(String grupo) {
		this.grupo = grupo;
	}


	public List<Aportacion> getAportacion() {
		return aportacion;
	}


	public void setAportacion(List<Aportacion> aportacion) {
		this.aportacion = aportacion;
	}


	public List<Campania> getCampania() {
		return campania;
	}


	public void setCampania(List<Campania> campania) {
		this.campania = campania;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (administrador ? 1231 : 1237);
		result = prime * result + ((aportacion == null) ? 0 : aportacion.hashCode());
		result = prime * result + ((campania == null) ? 0 : campania.hashCode());
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + ((grupo == null) ? 0 : grupo.hashCode());
		result = prime * result + (int) (id_usuario ^ (id_usuario >>> 32));
		result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
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
		Usuario other = (Usuario) obj;
		if (administrador != other.administrador)
			return false;
		if (aportacion == null) {
			if (other.aportacion != null)
				return false;
		} else if (!aportacion.equals(other.aportacion))
			return false;
		if (campania == null) {
			if (other.campania != null)
				return false;
		} else if (!campania.equals(other.campania))
			return false;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (grupo == null) {
			if (other.grupo != null)
				return false;
		} else if (!grupo.equals(other.grupo))
			return false;
		if (id_usuario != other.id_usuario)
			return false;
		if (nombre == null) {
			if (other.nombre != null)
				return false;
		} else if (!nombre.equals(other.nombre))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}


	
	
	
}
