package com.raygns.ticketingsystem.services;

import com.raygns.ticketingsystem.entities.Ticket;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TicketService {
    Ticket createTicket(Ticket ticket);
    Optional<Ticket> findById(UUID uuid);
    List<Ticket> findAll();
    Ticket updateTicket(UUID uuid, Ticket ticketDetails);
    void deleteTicket(UUID uuid);
}
