package com.dispatchpro.Model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.Length;

@Entity
@Data
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String phone;
    private String email;
    private String truck_type;
    private int no_of_trucks;
    private String operating_state;
    @Column(length = 500)
    private String note;
}

