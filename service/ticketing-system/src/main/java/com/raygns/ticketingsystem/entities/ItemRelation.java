package com.raygns.ticketingsystem.entities;

import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "item_relations")
public class ItemRelation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Changed to AUTO for simplicity
    @Column(name = "uuid", updatable = false, nullable = false)
    private UUID uuid;

    @Column(name = "item_one_uuid", nullable = false)
    private UUID itemOneUuid;

    @Column(name = "item_one_type", nullable = false)
    private String itemOneType;

    @Column(name = "item_two_uuid", nullable = false)
    private UUID itemTwoUuid;

    @Column(name = "item_two_type", nullable = false)
    private String itemTwoType;

    @Column(name = "ticket_uuid", nullable = false)
    private UUID ticketUuid;

    @Column(name = "relation_type", nullable = false)
    private String relationType;

    // Constructors, Getters, and Setters

    public ItemRelation() {
    }

    // Getters and setters for all fields

    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public UUID getItemOneUuid() {
        return itemOneUuid;
    }

    public void setItemOneUuid(UUID itemOneUuid) {
        this.itemOneUuid = itemOneUuid;
    }

    public String getItemOneType() {
        return itemOneType;
    }

    public void setItemOneType(String itemOneType) {
        this.itemOneType = itemOneType;
    }

    public UUID getItemTwoUuid() {
        return itemTwoUuid;
    }

    public void setItemTwoUuid(UUID itemTwoUuid) {
        this.itemTwoUuid = itemTwoUuid;
    }

    public String getItemTwoType() {
        return itemTwoType;
    }

    public void setItemTwoType(String itemTwoType) {
        this.itemTwoType = itemTwoType;
    }

    public UUID getTicketUuid() {
        return ticketUuid;
    }

    public void setTicketUuid(UUID ticketUuid) {
        this.ticketUuid = ticketUuid;
    }

    public String getRelationType() {
        return relationType;
    }

    public void setRelationType(String relationType) {
        this.relationType = relationType;
    }
}
