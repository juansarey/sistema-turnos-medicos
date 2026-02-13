package com.reycaro.turnos_medicos.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Deshabilitamos CSRF (protección de formularios) para poder probar desde Postman/PowerShell
            .csrf(csrf -> csrf.disable()) 
            // Configuramos quién puede entrar
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/**").permitAll() // ¡PUERTA ABIERTA! Permite todo lo que empiece con /api/
                .anyRequest().authenticated() // El resto sigue cerrado
            );
        
        return http.build();
    }
}