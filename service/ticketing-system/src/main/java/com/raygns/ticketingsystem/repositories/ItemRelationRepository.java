package com.raygns.ticketingsystem.repositories;

import com.raygns.ticketingsystem.entities.ItemRelation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ItemRelationRepository extends JpaRepository<ItemRelation, UUID> {
    // Find relations by the UUID of item one
    List<ItemRelation> findByItemOneUuid(UUID itemOneUuid);

    // Find relations by the UUID of item two
    List<ItemRelation> findByItemTwoUuid(UUID itemTwoUuid);

    // Find relations by ticket UUID
    List<ItemRelation> findByTicketUuid(UUID ticketUuid);

    // Find relations by type of relation
    List<ItemRelation> findByRelationType(String relationType);

    // You can add more custom query methods here as needed
}
