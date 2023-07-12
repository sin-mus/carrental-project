package com.cars_project.controller;

import com.cars_project.errors.ResourceNotFoundException;
import com.cars_project.errors.ValidationResponseException;
import com.cars_project.model.Car;
import com.cars_project.service.CarService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cars")
@CrossOrigin("http://localhost:4200/")
@RequiredArgsConstructor
public class CarController {
    private final CarService carService;

    @PostMapping("/new")
    public ResponseEntity<?> createCar(@Valid @RequestBody Car car, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // Handle validation errors and return the appropriate error response
            throw new ValidationResponseException("Error in creating car", bindingResult);
        }
        try {
            Car createdCar = carService.createCar(car);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCar);
        } catch (Exception e) {
            // Let the centralized exception handling mechanism handle the exception
            throw e; // Or handle the exception as per your requirement
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getCarById(@PathVariable long id) {
        Optional<Car> car = carService.getCarById(id);
        if (car.isEmpty()) {
            throw new ResourceNotFoundException("Car not found with ID: " + id);
        }
        return ResponseEntity.ok(car);
    }

    @GetMapping
    public ResponseEntity<Page<Car>> getCars(Pageable pageable) {
        Page<Car> cars = carService.getCars(pageable);
        return ResponseEntity.ok(cars);
    }


    @GetMapping("/search")
    public ResponseEntity<Page<Car>> getCarsByManufacturer(@RequestParam("manufacturer") String manufacturer, Pageable pageable) {
        Page<Car> cars = carService.getCarsByManufacturer(manufacturer, pageable);
        return ResponseEntity.ok(cars);
    }


    @PutMapping("/{id}/update")
    public ResponseEntity<?> updateCar(@PathVariable Long id, @Valid @RequestBody Car updatedCar, BindingResult bindingResult) throws Exception {
        if (bindingResult.hasErrors()) {
            // Construct the error response
            throw new ValidationResponseException("Error in updating car", bindingResult);
        }
        try {
            Optional<Car> car = carService.updateCar(id, updatedCar);
            return car.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        } catch (Exception e) {
            String errorMessage = "Failed to update car: " + e.getMessage();
            throw new Exception(errorMessage);
        }
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<?> deleteCar(@PathVariable Long id) throws Exception {
        Optional<Car> optionalCar = carService.deleteCar(id);
        if (optionalCar.isPresent()) {
            // Car successfully deleted
            return ResponseEntity.noContent().build();
        } else {
            // Car with the given ID not found
            String errorMessage = "Car not found with ID: " + id;
           throw new Exception(errorMessage);
        }
    }

    @GetMapping("/{carId}/rental-price")
    public ResponseEntity<Double> calculateRentalPrice(@PathVariable long carId,
                                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                                       @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        try {
            double rentalPrice = carService.calculateRentalPrice(carId, startDate, endDate);
            return ResponseEntity.ok(rentalPrice);
        } catch (NoSuchElementException e) {
            // Car with the given ID not found
            return ResponseEntity.notFound().build();
        } catch (IllegalArgumentException e) {
            // Invalid input values, such as invalid dates
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            // Other unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
