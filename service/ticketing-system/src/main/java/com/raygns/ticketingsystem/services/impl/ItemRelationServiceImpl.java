package com.raygns.ticketingsystem.services.impl;

import com.raygns.ticketingsystem.entities.ItemRelation;
import com.raygns.ticketingsystem.repositories.ItemRelationRepository;
import com.raygns.ticketingsystem.services.ItemRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ItemRelationServiceImpl implements ItemRelationService {

    private final ItemRelationRepository itemRelationRepository;

    @Autowired
    public ItemRelationServiceImpl(ItemRelationRepository itemRelationRepository) {
        this.itemRelationRepository = itemRelationRepository;
    }

    @Override
    public ItemRelation createItemRelation(ItemRelation itemRelation) {
        return itemRelationRepository.save(itemRelation);
    }

    @Override
    public Optional<ItemRelation> findById(UUID uuid) {
        return itemRelationRepository.findById(uuid);
    }

    @Override
    public List<ItemRelation> findAll() {
        return itemRelationRepository.findAll();
    }

    @Override
    public List<ItemRelation> findByItemOneUuid(UUID itemOneUuid) {
        return itemRelationRepository.findByItemOneUuid(itemOneUuid);
    }

    @Override
    public List<ItemRelation> findByItemTwoUuid(UUID itemTwoUuid) {
        return itemRelationRepository.findByItemTwoUuid(itemTwoUuid);
    }

    @Override
    public List<ItemRelation> findByTicketUuid(UUID ticketUuid) {
        return itemRelationRepository.findByTicketUuid(ticketUuid);
    }

    @Override
    public List<ItemRelation> findByRelationType(String relationType) {
        return itemRelationRepository.findByRelationType(relationType);
    }

    @Override
    public void deleteItemRelation(UUID uuid) {
        itemRelationRepository.deleteById(uuid);
    }
}
