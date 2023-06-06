package com.cars_project.service;

import com.cars_project.model.Car;
import com.cars_project.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarService {
    private final CarRepository carRepository;

    public Car createCar(Car car){
        return carRepository.save(car);
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Optional<Car> getCarById(long id) {
        return carRepository.findById(id);
    }
    public Page<Car> getCars(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return carRepository.findAll(pageable);
    }

    public Optional<Car> updateCar(long id, Car updatedCar) {
        Optional<Car> optionalCar = carRepository.findById(id);

        if(optionalCar.isPresent()){
            Car car = optionalCar.get();
            update(car, updatedCar);

            // Save the updated car in the repository
            return Optional.of(carRepository.save(car));
        }
        return Optional.empty();
    }

    public Optional<Car> deleteCustomer(Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);

        // check if car with that id exists, then delete it
        optionalCar.ifPresent(carRepository::delete);
        return optionalCar;
    }

    private void update(Car car, Car updatedCar){
        // Update fields with updated values
        car.setColor(updatedCar.getColor());
        car.setAvailability(updatedCar.isAvailability());
        car.setManufacturer(updatedCar.getManufacturer());
        car.setModel(updatedCar.getModel());
        car.setLicensePlateNumber(updatedCar.getLicensePlateNumber());
        car.setRentalRate(updatedCar.getRentalRate());
        car.setYear(updatedCar.getYear());

        // Fields with foreign key
        car.setCustomer(updatedCar.getCustomer());
        car.setCarDetails(updatedCar.getCarDetails());
        car.setReservations(updatedCar.getReservations());
    }

    public double calculateRentalPrice(long carId, LocalDate startDate, LocalDate endDate) {
        Car car = carRepository.findById(carId).orElse(null);
        if (car != null) {
            int rentalDays = calculateRentalDays(startDate, endDate);
            double basePrice = car.getRentalRate();
            double totalPrice = basePrice * rentalDays;
            // Additional calculations or discounts can be applied here
            return totalPrice;
        } else {
            throw new IllegalStateException("Didn't find car with id: " + carId);
        }
    }
    private int calculateRentalDays(LocalDate startDate, LocalDate endDate) {
        // Implement logic to calculate the number of rental days
        return (int) ChronoUnit.DAYS.between(startDate, endDate);
    }
}
