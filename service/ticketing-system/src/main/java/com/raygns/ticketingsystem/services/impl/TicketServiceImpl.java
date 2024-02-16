package com.raygns.ticketingsystem.services.impl;

import com.raygns.ticketingsystem.entities.Ticket;
import com.raygns.ticketingsystem.repositories.TicketRepository;
import com.raygns.ticketingsystem.services.TicketService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TicketServiceImpl implements TicketService {

    private final TicketRepository ticketRepository;

    @Autowired
    public TicketServiceImpl(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    @Override
    @Transactional
    public Ticket createTicket(Ticket ticket) {
        // Additional logic before saving can be added here
        return ticketRepository.save(ticket);
    }

    @Override
    public Optional<Ticket> findById(UUID uuid) {
        return ticketRepository.findById(uuid);
    }

    @Override
    public List<Ticket> findAll() {
        return ticketRepository.findAll();
    }

    @Override
    @Transactional
    public Ticket updateTicket(UUID uuid, Ticket ticketDetails) {
        Ticket ticket = ticketRepository.findById(uuid)
                .orElseThrow(() -> new RuntimeException("Ticket not found for this id :: " + uuid));

        ticket.setSubject(ticketDetails.getSubject());
        ticket.setBody(ticketDetails.getBody());
        ticket.setStatus(ticketDetails.getStatus());
        ticket.setPriority(ticketDetails.getPriority());
        // Update more fields as needed

        return ticketRepository.save(ticket);
    }

    @Override
    @Transactional
    public void deleteTicket(UUID uuid) {
        ticketRepository.deleteById(uuid);
    }
}