package com.raygns.ticketingsystem.services.impl;

import com.raygns.ticketingsystem.entities.User;
import com.raygns.ticketingsystem.repositories.UserRepository;
import com.raygns.ticketingsystem.services.UserService;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    @Transactional
    public User createUser(User user) {
        // Additional logic before saving can be added here
        user.setUserId(userRepository.save(user).getUuid());

        findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User already exists with this email :: " + user.getEmail()));

        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        if(user.getRole() == null) {
            user.setRole("USER");
        }


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


        System.out.println(userDetails.getName());


        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(passwordEncoder.encode(userDetails.getPassword()));

        if(userDetails.getRole() != null) {
            user.setRole(userDetails.getRole());
        }

        return userRepository.save(user);
    }

    @Override
    @Transactional
    public void deleteUser(UUID uuid) {
        userRepository.deleteById(uuid);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<UUID> authenticate(String login, String password) {


        Optional<UUID> uuid = userRepository.findByEmail(login)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()))
                .map(User::getUuid);

        if(uuid.isPresent()) {
            return uuid;
        } else {
            uuid = userRepository.findByUsername(login)
                    .filter(user -> passwordEncoder.matches(password, user.getPassword()))
                    .map(User::getUuid);
        }

        return uuid;
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}