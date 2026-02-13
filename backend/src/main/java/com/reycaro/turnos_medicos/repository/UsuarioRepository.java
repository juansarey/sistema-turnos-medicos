package com.reycaro.turnos_medicos.repository;

import com.reycaro.turnos_medicos.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
    // Método clave para el Login: Buscar usuario por email
    Optional<Usuario> findByEmail(String email);
}