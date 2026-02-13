package com.reycaro.turnos_medicos.controller;

import com.reycaro.turnos_medicos.dto.TurnoDTO;
import com.reycaro.turnos_medicos.model.Medico;
import com.reycaro.turnos_medicos.model.Paciente;
import com.reycaro.turnos_medicos.model.Turno;
import com.reycaro.turnos_medicos.repository.MedicoRepository;
import com.reycaro.turnos_medicos.repository.PacienteRepository;
import com.reycaro.turnos_medicos.repository.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/turnos")
@CrossOrigin(origins = "http://localhost:5173")
public class TurnoController {

    @Autowired private TurnoRepository turnoRepository;
    @Autowired private PacienteRepository pacienteRepository;
    @Autowired private MedicoRepository medicoRepository;

    @PostMapping("/reservar")
    public Turno reservarTurno(@RequestBody TurnoDTO dto) {
        // 1. Buscar al Médico
        Medico medico = medicoRepository.findById(dto.medicoId)
                .orElseThrow(() -> new RuntimeException("Médico no encontrado"));

        // 2. Buscar al Paciente por DNI (o crearlo si es nuevo)
        Paciente paciente = pacienteRepository.findByDni(dto.pacienteDni)
                .orElseGet(() -> {
                    Paciente nuevo = new Paciente();
                    nuevo.setDni(dto.pacienteDni);
                    nuevo.setNombre(dto.pacienteNombre);
                    nuevo.setTelefono(dto.pacienteTelefono);
                    return pacienteRepository.save(nuevo);
                });

        // 3. Crear el Turno
        Turno turno = new Turno();
        turno.setFechaHora(dto.fecha);
        turno.setMedico(medico);
        turno.setPaciente(paciente);
        turno.setEstado("RESERVADO");

        return turnoRepository.save(turno);
    }
    
    @GetMapping
    public List<Turno> listarTodos() {
        return turnoRepository.findAll();
    }
}