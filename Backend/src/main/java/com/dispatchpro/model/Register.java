package com.dispatchpro.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String phone;
    private String email;
    private String truck_type;
    private int no_of_trucks;
    private int truck_year;
    private String operating_state;
    private String experience;
    private String mc_no;
    private String preferred_lane;


}
