package tech.dork.garageuberboot.service;

import org.springframework.stereotype.Service;
import tech.dork.garageuberboot.exception.UserNotFoundException;
import tech.dork.garageuberboot.model.Register_User;
import tech.dork.garageuberboot.repository.RegisterUserRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class RegisterUserService {
    private final RegisterUserRepo registerUserRepo;

    public RegisterUserService(RegisterUserRepo registerUserRepo) {
        this.registerUserRepo = registerUserRepo;
    }

    public Register_User addUser(Register_User register_user) {
        register_user.setUserCode(UUID.randomUUID().toString());
        return registerUserRepo.save(register_user);
    }

    public List<Register_User> findAllUsers() {
        return registerUserRepo.findAll();
    }

    public Register_User updateUser(Register_User register_user) {
        return registerUserRepo.save(register_user);
    }

    public void deleteUser(Long id){
        registerUserRepo.deleteUserById(id);
    }

    public Register_User findUserById(Long id) {
        return registerUserRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
}
