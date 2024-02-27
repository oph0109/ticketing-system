package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.dto.LoginRequest;
import com.raygns.ticketingsystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<UUID> login(@RequestBody LoginRequest loginRequest) {


        System.out.println(loginRequest.getEmail());
        System.out.println(loginRequest.getUsername());
        System.out.println(loginRequest.getPassword());

        Optional<UUID> userUuid = userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if(!userUuid.isPresent()) {
            userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        }


        if (userUuid.isPresent()) {
            return ResponseEntity.ok(userUuid.get());
        } else {
            // Consider using a more appropriate status code based on your security practices
            return ResponseEntity.badRequest().build();
        }
    }
}