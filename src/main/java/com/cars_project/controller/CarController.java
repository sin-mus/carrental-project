package com.cars_project.controller;

import com.cars_project.model.Car;
import com.cars_project.service.CarService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
@RequiredArgsConstructor
public class CarController {
    
    private final CarService carService;
    @PostMapping("/new")
    public Car createCar(@RequestBody Car car){
        return carService.createCar(car);
    }
    @GetMapping("/{id}")
    public Optional<Car> findCarById(@PathVariable long id){
        return carService.getCarById(id);
    }
    @GetMapping
    public Page<Car> getCars(@RequestParam(defaultValue = "0") int pageNumber,
                             @RequestParam(defaultValue = "10") int pageSize) {
        return carService.getCars(pageNumber, pageSize);
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Optional<Car>> updateCustomer(@PathVariable Long id, @RequestBody Car updatedCar) {
        Optional<Car> car = carService.updateCar(id, updatedCar);
        if (car.isPresent()) {
            return ResponseEntity.ok(car);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}/delete")
    public Optional<Car> deleteCustomer(@PathVariable Long id){
        return carService.deleteCustomer(id);
    }

    @GetMapping("/cars/{carId}/rental-price")
    public double calculateRentalPrice(@PathVariable long carId,
                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        return carService.calculateRentalPrice(carId, startDate, endDate);
    }
}
