package com.cars_project.model;

import jakarta.persistence.*;
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
    private Long currentMileage;
    private Date registrationDone;

    @OneToOne
    @MapsId
    @JoinColumn(name = "car_id")
    private Car car;
}
