package com.cars_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
public class CarTrackingApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarTrackingApplication.class, args);
	}

}
