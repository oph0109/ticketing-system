package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.entities.User;
import com.raygns.ticketingsystem.repositories.UserRepository;
import com.raygns.ticketingsystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/insert")
    public @ResponseBody String addNewUser(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String role
    ) {

        User newUser = new User();

        newUser.setUserName(name);
        newUser.setEmail(email);
        newUser.setPassword(password);
        newUser.setRole(role);

        userRepository.save(newUser);

        return "Saved";
    }

}