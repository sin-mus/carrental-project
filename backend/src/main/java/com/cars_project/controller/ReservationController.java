package com.cars_project.controller;

import com.cars_project.model.Reservation;
import com.cars_project.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ReservationController {
    private final ReservationService reservationService;

    @GetMapping
    public Page<Reservation> getReservations(@RequestParam(defaultValue = "0") int pageNumber,
                                              @RequestParam(defaultValue = "10") int pageSize){
        return reservationService.getReservations(pageNumber, pageSize);
    }
    @GetMapping("/{id}")
    public Optional<Reservation> getReservationById(@RequestParam long id){
        return reservationService.getReservationById(id);
    }
    @PostMapping("/create")
    public Optional<Reservation> createReservation(@RequestBody Reservation reservation){
        return reservationService.createReservation(reservation);
    }
    @PutMapping("/{id}/update")
    public Optional<Reservation> updateReservation(@PathVariable long id, @RequestBody Reservation reservation){
        return reservationService.updateReservation(id, reservation);
    }
    @DeleteMapping("/{id}/delete")
    public Optional<Reservation> deleteReservation(@PathVariable long id){
        return reservationService.deleteReservation(id);
    }
}
