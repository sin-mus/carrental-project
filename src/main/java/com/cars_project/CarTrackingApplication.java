package com.cars_project;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Car APIS", version = "1.0", description = "Car Rental Manager"))
public class CarTrackingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarTrackingApplication.class, args);
	}

}
