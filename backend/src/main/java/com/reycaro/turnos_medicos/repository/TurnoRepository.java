package com.reycaro.turnos_medicos.repository;

import com.reycaro.turnos_medicos.model.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TurnoRepository extends JpaRepository<Turno, Long> {
    
    // ANTES: findByDni(String dni);  <-- Esto ya no sirve porque DNI no está en Turno
    
    // AHORA: Buscamos adentro del objeto Paciente
    List<Turno> findByPaciente_Dni(String dni); 
}