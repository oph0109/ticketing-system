package com.raygns.ticketingsystem.services;

import com.raygns.ticketingsystem.entities.User;
import com.raygns.ticketingsystem.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void insertUser(User u) {
        userRepository.save(u);
    }

}
