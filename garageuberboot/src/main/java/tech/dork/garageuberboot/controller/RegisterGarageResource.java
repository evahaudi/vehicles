package tech.dork.garageuberboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.dork.garageuberboot.model.Register_Garage;
import tech.dork.garageuberboot.service.RegisterGarageService;

import java.util.List;

@RestController
@RequestMapping("/register_garage")
public class RegisterGarageResource {
    private final RegisterGarageService registerGarageService;

    public RegisterGarageResource(RegisterGarageService registerGarageService) {
        this.registerGarageService = registerGarageService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Register_Garage>> getAllGarages(){
        List<Register_Garage> garages = registerGarageService.findAllGarages();
        return new ResponseEntity<>(garages, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Register_Garage> getGarageById(@PathVariable("id") Long id){
        Register_Garage registerGarage = registerGarageService.findGarageById(id);
        return new ResponseEntity<>(registerGarage,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Register_Garage> addGarage(@RequestBody Register_Garage registerGarage){
        Register_Garage newGarage = registerGarageService.addGarage(registerGarage);
        return  new ResponseEntity<>(newGarage,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Register_Garage> updateGarage(@RequestBody Register_Garage registerGarage){
        Register_Garage updateGarage = registerGarageService.updateGarage(registerGarage);
        return  new ResponseEntity<>(updateGarage,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteGarage(@PathVariable("id") Long id){
        registerGarageService.deleteGarage(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
