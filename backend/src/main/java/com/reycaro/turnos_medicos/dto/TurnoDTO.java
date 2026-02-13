package com.reycaro.turnos_medicos.dto;

import java.time.LocalDateTime;

public class TurnoDTO {
    public LocalDateTime fecha;
    public Long medicoId;
    public String pacienteDni; // Usamos DNI para identificar al paciente
    public String pacienteNombre; // Opcional: para crear paciente si no existe
    public String pacienteTelefono; // Opcional
}