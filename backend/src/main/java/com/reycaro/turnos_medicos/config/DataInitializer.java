package com.reycaro.turnos_medicos.config;

import com.reycaro.turnos_medicos.model.*;
import com.reycaro.turnos_medicos.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private MedicoRepository medicoRepository;
    @Autowired private PacienteRepository pacienteRepository;

    @Override
    public void run(String... args) throws Exception {
        
        // Solo cargamos datos si la base está vacía (para no duplicar)
        if (usuarioRepository.count() == 0) {
            
            System.out.println("🚀 Cargando datos de prueba...");

            // 1. Crear un Médico
            Usuario usuarioMedico = new Usuario();
            usuarioMedico.setEmail("medico@clinica.com");
            usuarioMedico.setPassword("medico123"); // En el futuro esto se encripta
            usuarioMedico.setRol(Rol.MEDICO);

            Medico medico = new Medico();
            medico.setNombre("Dr. Gregory House");
            medico.setEspecialidad("Diagnóstico");
            medico.setMatricula("MN-5555");
            medico.setUsuario(usuarioMedico); // Vinculamos usuario al médico

            medicoRepository.save(medico);

            // 2. Crear un Paciente de prueba
            Usuario usuarioPaciente = new Usuario();
            usuarioPaciente.setEmail("paciente@gmail.com");
            usuarioPaciente.setPassword("paciente123");
            usuarioPaciente.setRol(Rol.PACIENTE);

            Paciente paciente = new Paciente();
            paciente.setNombre("Pepe Argento");
            paciente.setDni("12345678");
            paciente.setTelefono("351-123456");
            paciente.setUsuario(usuarioPaciente);

            pacienteRepository.save(paciente);
            
            // 3. Crear un Admin
            Usuario admin = new Usuario();
            admin.setEmail("admin@clinica.com");
            admin.setPassword("admin123");
            admin.setRol(Rol.ADMIN);
            
            usuarioRepository.save(admin);

            System.out.println("✅ Datos de prueba cargados exitosamente!");
        }
    }
}