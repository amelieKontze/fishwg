package de.neuefische.controller;

import de.neuefische.model.Fish;
import de.neuefische.service.FishService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fish")
@RequiredArgsConstructor
public class FishController {

    private final FishService fishService;

    @GetMapping()
    public List<Fish> getAllFish(){
        return fishService.getAllFish();
    }
}
