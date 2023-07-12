package com.cars_project.controller;

import com.cars_project.model.Customer;
import com.cars_project.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping
    public Page<Customer> getCustomers(@RequestParam(defaultValue = "0") int pageNumber,
                                       @RequestParam(defaultValue = "6") int pageSize){
        return customerService.getCustomers(pageNumber, pageSize);
    }
    @GetMapping("/{id}")
    public Optional<Customer> getCustomer(@PathVariable long id){
        return customerService.getCustomer(id);
    }
    @PostMapping("/create")
    public Optional<Customer> createCustomer(@RequestBody Customer customer){
        return customerService.createCustomer(customer);
    }
    @PutMapping("/{id}/update")
    public ResponseEntity<Optional<Customer>> updateCustomer(@PathVariable long id, @RequestBody Customer customer){
        Optional<Customer> optionalCustomer = customerService.updateCustomer(id, customer);
        if (optionalCustomer.isPresent()){
            return ResponseEntity.ok(optionalCustomer);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}/delete")
    public Optional<Customer> deleteCustomer(@PathVariable long id){
        return customerService.deleteCustomer(id);
    }
}
