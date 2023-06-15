package de.neuefische.controller;

import de.neuefische.model.Tank;
import de.neuefische.service.TankService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class TankController {
    private final TankService tankService;

    @GetMapping("my-tanks")
    public List<Tank> getAllTanks() {
        return tankService.getAllTanks();
    }

}
