package de.neuefische.service;

import de.neuefische.model.Fish;
import de.neuefische.repository.FishRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FishServiceTest {

    FishRepo fishRepo = mock(FishRepo.class);

    Fish fish = new Fish(
            "1",
            "Betta",
            "Betta Splendens",
            "",
            "Süßwasser",
            "Thailand",
            20,
            "25-30",
            "6,5-8",
            "aggressiv");

    FishService fishService = new FishService(fishRepo);

    @Test
    void getAllFish_shouldReturnAListOfAllFish() {
        //given
        when(fishRepo.findAll()).thenReturn(List.of(fish));
        //when
        List<Fish> actual = fishService.getAllFish();
        //then
        assertEquals(actual, List.of(fish));

    }
}