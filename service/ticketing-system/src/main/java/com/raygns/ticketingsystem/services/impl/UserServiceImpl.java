package com.raygns.ticketingsystem.services.impl;

import com.raygns.ticketingsystem.entities.User;
import com.raygns.ticketingsystem.repositories.UserRepository;
import com.raygns.ticketingsystem.services.UserService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public User createUser(User user) {
        // Additional logic before saving can be added here
        user.setUserId(userRepository.save(user).getUuid());
        return user;
    }

    @Override
    public Optional<User> findById(UUID uuid) {
        return userRepository.findById(uuid);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User updateUser(UUID uuid, User userDetails) {
        User user = userRepository.findById(uuid)
                .orElseThrow(() -> new RuntimeException("User not found for this id :: " + uuid));

        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setRole(userDetails.getRole());
        // Update more fields as needed

        return userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteUser(UUID uuid) {
        userRepository.deleteById(uuid);
    }
}