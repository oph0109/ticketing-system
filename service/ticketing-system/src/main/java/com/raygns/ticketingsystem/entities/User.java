package com.raygns.ticketingsystem.entities;

import jakarta.persistence.*;
import org.springframework.lang.NonNull;

import java.sql.Timestamp;

@Entity
public class User {
    @Id
    private Long UserID;
    private String UserName;
    private String Email;
    private String Password;
    private String Role;
    private String CreatedAt;

}
