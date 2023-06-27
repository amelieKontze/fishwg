package de.neuefische.service;

import de.neuefische.model.Tank;
import de.neuefische.repository.TankRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TankService {

    private final TankRepo tankRepo;

    public List<Tank> getAllTanks() {
        return tankRepo.findAll();
    }

    public Tank addTank(Tank newTank) {
        return tankRepo.save(newTank);
    }

    public void deleteTank(String id) {
        tankRepo.deleteById(id);
    }
}