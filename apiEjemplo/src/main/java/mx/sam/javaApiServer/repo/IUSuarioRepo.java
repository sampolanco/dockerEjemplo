package mx.sam.javaApiServer.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.sam.javaApiServer.model.Usuario;

public interface IUSuarioRepo extends JpaRepository<Usuario,Integer>{

}
