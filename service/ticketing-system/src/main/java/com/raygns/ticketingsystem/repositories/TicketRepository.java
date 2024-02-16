package com.raygns.ticketingsystem.repositories;

import com.raygns.ticketingsystem.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TicketRepository extends JpaRepository<Ticket, UUID> {
    // Example custom method to find tickets by status
    List<Ticket> findByStatus(String status);

    // Example custom method to find tickets by priority
    List<Ticket> findByPriority(String priority);
}
