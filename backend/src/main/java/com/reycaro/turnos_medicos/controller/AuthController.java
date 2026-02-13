package com.reycaro.turnos_medicos.controller;

import com.reycaro.turnos_medicos.model.Usuario;
import com.reycaro.turnos_medicos.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173") // Permitimos a React hablar con este controller
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Clase "DTO" interna para recibir los datos del Login
    public static class LoginRequest {
        public String email;
        public String password;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        
        // 1. Buscamos al usuario por email
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findByEmail(loginRequest.email);

        // 2. Si existe, verificamos la contraseña
        if (usuarioEncontrado.isPresent()) {
            Usuario usuario = usuarioEncontrado.get();
            
            // NOTA: En producción, aquí usaríamos BCrypt para comparar hashes.
            // Por ahora, comparamos texto plano como definimos en DataInitializer.
            if (usuario.getPassword().equals(loginRequest.password)) {
                return ResponseEntity.ok(usuario); // ¡Login exitoso! Devolvemos los datos del usuario
            }
        }

        // 3. Si no existe o la contraseña está mal
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email o contraseña incorrectos");
    }
}