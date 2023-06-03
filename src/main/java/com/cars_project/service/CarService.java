package com.cars_project.service;

import com.cars_project.model.Car;
import com.cars_project.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CarService {
    private final CarRepository carRepository;

    public Car createCar(Car car){
        return carRepository.save(car);
    }
}
