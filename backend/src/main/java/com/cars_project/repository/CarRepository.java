package com.cars_project.repository;

import com.cars_project.model.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    Page<Car> findAll(Pageable pageable);
    Page<Car> findByManufacturerContaining(String manufacturer, Pageable pageable);
}
