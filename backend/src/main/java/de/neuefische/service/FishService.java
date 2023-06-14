package de.neuefische.service;


import de.neuefische.model.Fish;
import de.neuefische.repository.FishRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
@RequiredArgsConstructor
public class FishService {

    private final FishRepo fishRepo;



    public List<Fish> getAllFish() {
        return fishRepo.findAll();
    }

}
