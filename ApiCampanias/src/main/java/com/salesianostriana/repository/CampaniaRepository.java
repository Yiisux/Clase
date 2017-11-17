package com.salesianostriana.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.salesianostriana.pojo.Campania;

@RepositoryRestResource
public interface CampaniaRepository extends JpaRepository<Campania, Long>{

}
