package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.entities.User;
import com.raygns.ticketingsystem.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @PutMapping
    public void insertUser() {
        User user = new User();

        //todo instantiate with request body

        userService.insertUser(user);
    }

}