package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.entities.User;
import com.raygns.ticketingsystem.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public @ResponseBody Optional<User> getUser(
            @PathVariable String id
    ) {
        return userRepository.findById(Integer.parseInt(id));
    }

    @PostMapping("/insert")
    public @ResponseBody String addNewUser(
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam String password,
            @RequestParam String role
    ) {

        long currentTimeInMillis = System.currentTimeMillis();

        Date currentDate = new Date(currentTimeInMillis);

        String currentDateTime = currentDate.toString();

        User newUser = new User();

        newUser.setUserName(name);
        newUser.setEmail(email);
        newUser.setPassword(password);
        newUser.setRole(role);
        newUser.setCreatedAt(currentDateTime);

        userRepository.save(newUser);

        return "Saved";
    }

    @DeleteMapping("/delete/{id}")
    public @ResponseBody String deleteUser(
            @PathVariable String id
    ) {
        userRepository.deleteById(Integer.valueOf(id));

        return "Deleted user with id: " + id;
    }

}