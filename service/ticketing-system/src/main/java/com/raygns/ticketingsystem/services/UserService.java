package com.raygns.ticketingsystem.services;

import com.raygns.ticketingsystem.entities.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserService {

    User createUser(User user);

    Optional<User> findById(UUID uuid);

    List<User> findAll();

    User updateUser(UUID uuid, User user);

    void deleteUser(UUID uuid);
    Optional<User> findByEmail(String email);
    public Optional<UUID> authenticate(String username, String password);
}