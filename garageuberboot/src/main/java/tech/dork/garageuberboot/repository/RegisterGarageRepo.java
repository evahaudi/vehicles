package tech.dork.garageuberboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.dork.garageuberboot.model.Register_Garage;

import java.util.Optional;

public interface RegisterGarageRepo extends JpaRepository<Register_Garage, Long> {
    Optional<Register_Garage> findGarageById(Long id);

    void deleteGarageById(Long id);
}
