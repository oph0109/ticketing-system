package com.raygns.ticketingsystem.entities;

import jakarta.persistence.*;
import org.springframework.lang.NonNull;

import java.sql.Timestamp;

@Entity
@Table(name = "Users")
public class User {
    public Long getUserID() {
        return UserID;
    }

    public void setUserID(Long userID) {
        UserID = userID;
    }

    public String getUserName() {
        return Name;
    }

    public void setUserName(String userName) {
        Name = userName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getRole() {
        return Role;
    }

    public void setRole(String role) {
        Role = role;
    }

    public String getCreatedAt() {
        return CreatedAt;
    }

    public void setCreatedAt(String createdAt) {
        CreatedAt = createdAt;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long UserID;
    private String Name;
    private String Email;
    private String Password;
    private String Role;
    private String CreatedAt;

}
