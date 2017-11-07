package com.salesianostriana.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.salesianostriana.pojo.Aportacion;


@RepositoryRestResource
public interface AportacionesRepository extends JpaRepository<Aportacion, Long>{

}
