package com.raygns.ticketingsystem.services;

import com.raygns.ticketingsystem.entities.ItemRelation;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ItemRelationService {
    ItemRelation createItemRelation(ItemRelation itemRelation);
    Optional<ItemRelation> findById(UUID uuid);
    List<ItemRelation> findAll();
    List<ItemRelation> findByItemOneUuid(UUID itemOneUuid);
    List<ItemRelation> findByItemTwoUuid(UUID itemTwoUuid);
    List<ItemRelation> findByTicketUuid(UUID ticketUuid);
    List<ItemRelation> findByRelationType(String relationType);
    void deleteItemRelation(UUID uuid);
}
