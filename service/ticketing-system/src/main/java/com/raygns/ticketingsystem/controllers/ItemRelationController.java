package com.raygns.ticketingsystem.controllers;

import com.raygns.ticketingsystem.entities.ItemRelation;
import com.raygns.ticketingsystem.services.ItemRelationService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/itemrelations")
public class ItemRelationController {

    private final ItemRelationService itemRelationService;

    @Autowired
    public ItemRelationController(ItemRelationService itemRelationService) {
        this.itemRelationService = itemRelationService;
    }

    // Create a new item relation
    @PostMapping
    @Operation(summary = "Get Sample", description = "Example get method")
    public ResponseEntity<ItemRelation> createItemRelation(@RequestBody ItemRelation itemRelation) {
        ItemRelation newItemRelation = itemRelationService.createItemRelation(itemRelation);
        return ResponseEntity.ok(newItemRelation);
    }

    // Get a single item relation by UUID
    @GetMapping("/{uuid}")
    public ResponseEntity<ItemRelation> getItemRelationById(@PathVariable UUID uuid) {
        return itemRelationService.findById(uuid)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get all item relations
    @GetMapping
    public List<ItemRelation> getAllItemRelations() {
        return itemRelationService.findAll();
    }

    // Get item relations by item one UUID
    @GetMapping("/itemone/{itemOneUuid}")
    public List<ItemRelation> getItemRelationsByItemOneUuid(@PathVariable UUID itemOneUuid) {
        return itemRelationService.findByItemOneUuid(itemOneUuid);
    }

    // Get item relations by item two UUID
    @GetMapping("/itemtwo/{itemTwoUuid}")
    public List<ItemRelation> getItemRelationsByItemTwoUuid(@PathVariable UUID itemTwoUuid) {
        return itemRelationService.findByItemTwoUuid(itemTwoUuid);
    }

    // Get item relations by ticket UUID
    @GetMapping("/ticket/{ticketUuid}")
    public List<ItemRelation> getItemRelationsByTicketUuid(@PathVariable UUID ticketUuid) {
        return itemRelationService.findByTicketUuid(ticketUuid);
    }

    // Get item relations by relation type
    @GetMapping("/type/{relationType}")
    public List<ItemRelation> getItemRelationsByRelationType(@PathVariable String relationType) {
        return itemRelationService.findByRelationType(relationType);
    }

    // Delete an item relation
    @DeleteMapping("/{uuid}")
    public ResponseEntity<Void> deleteItemRelation(@PathVariable UUID uuid) {
        itemRelationService.deleteItemRelation(uuid);
        return ResponseEntity.ok().build();
    }
}
