package com.cars_project.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String drivingLicenseNumber;
    private String passportNumber;
    private String contractImage;
    private String passportImage;
    private String driverLicenseImage;
    private String entryStampImage;

    @OneToMany(mappedBy = "customer")
    private List<Car> rentedCars;

    @OneToMany(mappedBy = "customer")
    private List<Invoice> invoices;

    @OneToMany(mappedBy = "customer")
    private List<Reservation> reservations;
}
