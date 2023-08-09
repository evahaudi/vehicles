package tech.dork.garageuberboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.dork.garageuberboot.model.Services;
import tech.dork.garageuberboot.service.ServicesService;

import java.util.List;

@RestController
@RequestMapping("/service_requests")
public class ServicesResource {
    private final ServicesService servicesService;

    public ServicesResource(ServicesService servicesService) {
        this.servicesService = servicesService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Services>> getServiceRequests () {
        List<Services> services = servicesService.findAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Services> getServicesById (@PathVariable("id") Long id) {
        Services services = servicesService.findServiceById(id);
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Services> addServices(@RequestBody Services services) {
        Services newServices = servicesService.addService(services);
        return new ResponseEntity<>(newServices, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Services> updateServices(@RequestBody Services services) {
        Services updateServices = servicesService.updateService(services);
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteServices(@PathVariable("id") Long id) {
        servicesService.deleteService(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
