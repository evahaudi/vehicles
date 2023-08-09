package tech.dork.garageuberboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.dork.garageuberboot.model.Services;

import java.util.Optional;

public interface ServicesRepo extends JpaRepository<Services,Long> {
    Optional<Services> findServiceById(Long id);

    void deleteServiceById(Long id);
}
