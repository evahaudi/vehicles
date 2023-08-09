package tech.dork.garageuberboot.service;

import org.springframework.stereotype.Service;
import tech.dork.garageuberboot.exception.GarageNotFoundException;
import tech.dork.garageuberboot.exception.UserNotFoundException;
import tech.dork.garageuberboot.model.Register_Garage;
import tech.dork.garageuberboot.model.Register_User;
import tech.dork.garageuberboot.repository.RegisterGarageRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class RegisterGarageService {
    private final RegisterGarageRepo registerGarageRepo;

    public RegisterGarageService(RegisterGarageRepo registerGarageRepo) {
        this.registerGarageRepo = registerGarageRepo;
    }

    public Register_Garage addGarage(Register_Garage registerGarage) {
        registerGarage.setGarageCode(UUID.randomUUID().toString());
        return registerGarageRepo.save(registerGarage);
    }

    public List<Register_Garage> findAllGarages() {
        return registerGarageRepo.findAll();
    }

    public Register_Garage updateGarage(Register_Garage registerGarage) {
        return registerGarageRepo.save(registerGarage);
    }

    public void deleteGarage(Long id){
        registerGarageRepo.deleteGarageById(id);
    }

    public Register_Garage findGarageById(Long id) {
        return registerGarageRepo.findGarageById(id)
                .orElseThrow(() -> new GarageNotFoundException("Garage by id " + id + " was not found"));
    }
}
