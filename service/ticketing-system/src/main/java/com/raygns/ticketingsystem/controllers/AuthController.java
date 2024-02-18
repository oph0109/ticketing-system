package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.dto.LoginRequest;
import com.raygns.ticketingsystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<UUID> login(@RequestBody LoginRequest loginRequest) {
        Optional<UUID> userUuid = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
        return userUuid.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.badRequest().build());
    }
}