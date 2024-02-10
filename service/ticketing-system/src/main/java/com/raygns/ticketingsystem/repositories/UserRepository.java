package com.raygns.ticketingsystem.repositories;

import com.raygns.ticketingsystem.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Integer> {

}
