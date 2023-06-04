package com.cars_project.service;

import com.cars_project.model.Car;
import com.cars_project.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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

    public Optional<Car> updateCar(long id, Car newCar) {
        Optional<Car> optionalCar = carRepository.findById(id);

        if(optionalCar.isPresent()){
            Car car = optionalCar.get();
            // Update fields with updated values
            car.setColor(newCar.getColor());
            car.setAvailability(newCar.isAvailability());
            car.setManufacturer(newCar.getManufacturer());
            car.setModel(newCar.getModel());
            car.setLicensePlateNumber(newCar.getLicensePlateNumber());
            car.setRentalRate(newCar.getRentalRate());
            car.setYear(newCar.getYear());

            // Fields with foreign key
            car.setCustomer(newCar.getCustomer());
            car.setCarDetails(newCar.getCarDetails());
            car.setReservations(newCar.getReservations());

            // Save the updated car in the repository
            return Optional.of(carRepository.save(optionalCar.get()));
        }
        return Optional.empty();
    }

    public Optional<Car> deleteCustomer(Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);

        // check if car with that id exists, then delete it
        optionalCar.ifPresent(carRepository::delete);
        return optionalCar;
    }
}
