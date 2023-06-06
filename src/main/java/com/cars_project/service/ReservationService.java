package com.cars_project.service;

import com.cars_project.model.Reservation;
import com.cars_project.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository repository;

    public Page<Reservation> getReservations(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return repository.findAll(pageable);
    }

    public Optional<Reservation> getReservationById(long id) {
        return repository.findById(id);
    }

    public Optional<Reservation> createReservation(Reservation reservation){
        return Optional.of(repository.save(reservation));
    }
    public Optional<Reservation> updateReservation(long id, Reservation updatedReservation){
        Optional<Reservation> optionalReservation = repository.findById(id);

        if(optionalReservation.isPresent()){
            Reservation reservation = optionalReservation.get();

            update(reservation, updatedReservation);
            return Optional.of(repository.save(reservation));
        }
        return Optional.empty();
    }
    public Optional<Reservation> deleteReservation(long id){
        Optional<Reservation> optionalReservation = Optional.of(repository.getReferenceById(id));
        optionalReservation.ifPresent(repository::delete);

        return optionalReservation;
    }
    private void update(Reservation reservation, Reservation updatedReservation){
        // fields with foreign keys
        reservation.setCar(updatedReservation.getCar());
        reservation.setCustomer(updatedReservation.getCustomer());
        reservation.setInvoice(updatedReservation.getInvoice());


        reservation.setStartDate(updatedReservation.getStartDate());
        reservation.setEndDate(updatedReservation.getEndDate());
        reservation.setRentalDuration(reservation.getRentalDuration());
        reservation.setTotalCost(reservation.getTotalCost());
    }
}
