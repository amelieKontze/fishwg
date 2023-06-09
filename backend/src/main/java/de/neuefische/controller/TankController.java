package de.neuefische.controller;

import de.neuefische.model.Tank;
import de.neuefische.service.TankService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tank")
@RequiredArgsConstructor
public class TankController {
    private final TankService tankService;

    @GetMapping("/my-tanks")
    public List<Tank> getAllTanks() {
        return tankService.getAllTanks();
    }

    @PostMapping("/new-tank")
    public Tank addTank(@RequestBody Tank newTank) {
        return tankService.addTank(newTank);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteTank(@PathVariable String id) {
        tankService.deleteTank(id);
    }

    @PutMapping("/update-tank/{id}")
    public Tank updateTank(@PathVariable String id, @RequestBody Tank updatedTank) {
        return tankService.updateTank(updatedTank);
    }

}
