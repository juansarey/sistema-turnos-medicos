package com.reycaro.turnos_medicos.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "turnos")
public class Turno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime fechaHora;
    private String estado; // "DISPONIBLE", "RESERVADO"

    // RELACIÓN: Muchos turnos pueden ser de UN paciente
    // (Puede ser null si el turno está creado pero nadie lo reservó todavía)
    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;

    // RELACIÓN: Muchos turnos pertenecen a UN médico
    @ManyToOne
    @JoinColumn(name = "medico_id")
    private Medico medico;

    public Turno() {}

    // Getters y Setters
    public Long getId() { return id; }
    public LocalDateTime getFechaHora() { return fechaHora; }
    public void setFechaHora(LocalDateTime fechaHora) { this.fechaHora = fechaHora; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public Paciente getPaciente() { return paciente; }
    public void setPaciente(Paciente paciente) { this.paciente = paciente; }
    public Medico getMedico() { return medico; }
    public void setMedico(Medico medico) { this.medico = medico; }
}