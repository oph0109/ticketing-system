package com.raygns.ticketingsystem.repositories;

import com.raygns.ticketingsystem.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

}
