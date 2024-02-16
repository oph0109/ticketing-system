package com.raygns.ticketingsystem.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "uuid", updatable = false, nullable = false)
    private UUID uuid;

    @Column(name = "ticket_id")
    private Long ticketId;

    @Column(name = "subject", nullable = false)
    private String subject;

    @Column(name = "body", nullable = false)
    private String body;

    @Column(name = "status", nullable = false)
    private String status;

    @Column(name = "priority", nullable = false)
    private String priority;

    @Column(name = "date_of_creation")
    private LocalDateTime dateOfCreation;

    public Ticket() {
        // Set the date of creation to the current date and time
        this.dateOfCreation = LocalDateTime.now();
    }

    // Getters and setters

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
        // Optionally generate ticketId based on UUID if needed
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(UUID uuid) {
        int hash = uuid.hashCode();
        long positiveHash = Math.abs((long) hash);
        this.ticketId = positiveHash % 1_000_000; // Ensures a 6-digit number
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public LocalDateTime getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(LocalDateTime dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }
}
