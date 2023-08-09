package tech.dork.garageuberboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.dork.garageuberboot.model.Reviews;

import java.util.Optional;

public interface ReviewsRepo extends JpaRepository<Reviews, Long> {
    Optional<Reviews> findReviewById(Long id);

    void deleteReviewById(Long id);
}
