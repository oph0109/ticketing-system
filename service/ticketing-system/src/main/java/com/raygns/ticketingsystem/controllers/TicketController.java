package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.entities.Ticket;
import com.raygns.ticketingsystem.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    // Create a new ticket
    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        Ticket newTicket = ticketService.createTicket(ticket);
        return ResponseEntity.ok(newTicket);
    }

    // Get a single ticket by UUID
    @GetMapping("/{uuid}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable UUID uuid) {
        return ticketService.findById(uuid)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get all tickets
    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.findAll();
    }

    // Update ticket
    @PutMapping("/{uuid}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable UUID uuid, @RequestBody Ticket ticketDetails) {
        try {
            Ticket updatedTicket = ticketService.updateTicket(uuid, ticketDetails);
            return ResponseEntity.ok(updatedTicket);
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete ticket
    @DeleteMapping("/{uuid}")
    public ResponseEntity<Void> deleteTicket(@PathVariable UUID uuid) {
        try {
            ticketService.deleteTicket(uuid);
            return ResponseEntity.ok().build();
        } catch (RuntimeException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
