package com.cars_project.service;

import com.cars_project.model.Customer;
import com.cars_project.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private CustomerRepository customerRepository;
    public Page<Customer> getCustomers(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return customerRepository.findAll(pageable);
    }
    public Optional<Customer> getCustomer(long id){
        return customerRepository.findById(id);
    }

    public Optional<Customer> updateCustomer(long id, Customer updatedCustomer) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        if(optionalCustomer.isPresent()){
            Customer customer = optionalCustomer.get();
            update(customer, updatedCustomer);

            // Save updated customer to the repo
            return Optional.of(customerRepository.save(customer));
        }
        return Optional.empty();
    }

    public void update(Customer customer, Customer updatedCustomer){
        // Update fields with updated values
        customer.setName(updatedCustomer.getName());
        customer.setAddress(updatedCustomer.getAddress());
        customer.setPassportNumber(updatedCustomer.getPassportNumber());
        customer.setDrivingLicenseNumber(updatedCustomer.getDrivingLicenseNumber());
        customer.setContractImage(updatedCustomer.getContractImage());
        customer.setDriverLicenseImage(updatedCustomer.getDriverLicenseImage());
        customer.setEntryStampImage(updatedCustomer.getEntryStampImage());

        // Update fields with foreign keys
        customer.setInvoices(updatedCustomer.getInvoices());
        customer.setRentedCars(updatedCustomer.getRentedCars());
        customer.setReservations(updatedCustomer.getReservations());
    }

    public Optional<Customer> deleteCustomer(long id) {
        Optional<Customer> optionalCustomer = customerRepository.findById(id);

        // check if exists
        optionalCustomer.ifPresent(customerRepository::delete);
        return optionalCustomer;
    }
}
