package com.cars_project.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @NotNull
    @NotBlank(message = "manufacturer is mandatory")
    private String manufacturer;
    @NotNull
    @NotBlank(message = "model is mandatory")
    private String model;
    @NotNull
    @NotBlank(message = "color is mandatory")
    private String color;
    @NotNull
    @NotBlank(message = "license plate number is mandatory")
    private String licensePlateNumber;
    @NotNull
    @NotBlank(message = "Image Url is mandatory")
    private String imageUrl;
    @Min(value = 0)
    private int rentalRate;
    @Min(value = 1995)
    private int year;
    @Column(name = "availability", columnDefinition = "boolean default true")
    private boolean availability;

    @OneToOne(mappedBy = "car", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    CarDetails carDetails;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "car")
    private List<Reservation> reservations;
}
