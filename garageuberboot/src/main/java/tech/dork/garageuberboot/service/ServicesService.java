package tech.dork.garageuberboot.service;


import org.springframework.stereotype.Service;
import tech.dork.garageuberboot.exception.ServiceNotFoundException;
import tech.dork.garageuberboot.model.Services;
import tech.dork.garageuberboot.repository.ServicesRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ServicesService {
    private final ServicesRepo servicesRepo;

    public ServicesService(ServicesRepo servicesRepo) {
        this.servicesRepo = servicesRepo;
    }

    public Services addService(Services services) {
        services.setServiceStatusCode(UUID.randomUUID().toString());
        return servicesRepo.save(services);
    }

    public List<Services> findAllServices() {
        return servicesRepo.findAll();
    }

    public Services updateService(Services service) {
        return servicesRepo.save(service);
    }

    public void deleteService(Long id){
        servicesRepo.deleteServiceById(id);
    }

    public Services findServiceById(Long id) {
        return servicesRepo.findServiceById(id)
                .orElseThrow(() -> new ServiceNotFoundException("Service by id " + id + " was not found"));
    }
}
