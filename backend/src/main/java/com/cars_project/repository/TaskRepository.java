package com.cars_project.repository;

import com.cars_project.model.Reservation;
import com.cars_project.model.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(path = "tasks")
public interface TaskRepository extends JpaRepository<Task, Long> {
    Page<Task> findByTypeContaining(@RequestParam("type") String type, Pageable pageable);
}
