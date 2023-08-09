package tech.dork.garageuberboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.dork.garageuberboot.model.Register_User;

import java.util.Optional;

public interface RegisterUserRepo extends JpaRepository<Register_User,Long> {
    Optional<Register_User> findUserById(Long id);

    void deleteUserById(Long id);
}
