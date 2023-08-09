package tech.dork.garageuberboot.controller;

import tech.dork.garageuberboot.model.Register_User;
import tech.dork.garageuberboot.service.RegisterUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/register_user")
public class RegisterUserResource {
    private final RegisterUserService registerUserService;

    public RegisterUserResource(RegisterUserService registerUserService) {
        this.registerUserService = registerUserService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Register_User>> getAllUsers () {
        List<Register_User> users = registerUserService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Register_User> getUserById (@PathVariable("id") Long id) {
        Register_User register_user = registerUserService.findUserById(id);
        return new ResponseEntity<>(register_user, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Register_User> addUser(@RequestBody Register_User register_user) {
        Register_User newUser = registerUserService.addUser(register_user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Register_User> updateUser(@RequestBody Register_User register_user) {
        Register_User updateUser = registerUserService.updateUser(register_user);
        return new ResponseEntity<>(register_user, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        registerUserService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
