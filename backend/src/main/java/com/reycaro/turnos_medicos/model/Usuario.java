package com.reycaro.turnos_medicos.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email; // Este será el "username" para loguearse

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Rol rol; // PACIENTE o MEDICO

    public Usuario() {}

    // Getters y Setters...
    public Long getId() { return id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public Rol getRol() { return rol; }
    public void setRol(Rol rol) { this.rol = rol; }
}