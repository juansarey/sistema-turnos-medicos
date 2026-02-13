package com.reycaro.turnos_medicos.repository;

import com.reycaro.turnos_medicos.model.Medico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
}