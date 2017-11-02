package com.salesianostriana.model;

public class Error {
	
	private int statusCode;
	private String mensaje;

	public Error() {

	}

	public Error(int statusCode, String mensaje) {
		super();
		this.statusCode = statusCode;
		this.mensaje = mensaje;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	@Override
	public String toString() {
		return "Error [statusCode=" + statusCode + ", mensaje=" + mensaje + "]";
	}


}
