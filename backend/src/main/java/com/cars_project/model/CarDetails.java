package com.cars_project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "car_details")
public class CarDetails {
    @Id
    @Column(name = "car_id")
    private Long id;
    @NotNull
    @NotBlank(message = "license plate number is mandatory")
    private String licensePlateNumber;
    @NotNull
    @NotBlank(message = "color is mandatory")
    private String color;
    private boolean availability;
    private Long currentMileage;
    private Date registrationDone;

    @OneToOne
    @MapsId
    @JoinColumn(name = "car_id")
    private Car car;
}
