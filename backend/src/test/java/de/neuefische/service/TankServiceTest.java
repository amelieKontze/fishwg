package de.neuefische.service;

import de.neuefische.model.Fish;
import de.neuefische.model.Tank;
import de.neuefische.repository.TankRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class TankServiceTest {

    TankRepo tankRepo = mock(TankRepo.class);

    Fish fish = new Fish(
            "1",
            "Betta",
            "Betta Splendens",
            "",
            "Süßwasser",
            "Thailand",
            20,
            25,
            30,
            6.5,
            8.0,
            "aggressiv");
    List<Fish> residentFish = List.of(fish);

    Tank tank = new Tank(
            "1",
            "30l Nano",
            "Süßwasser",
            30,
            27,
            residentFish,
            7.5
    );

    TankService tankService = new TankService(tankRepo);

    @Test
    void getAllTanks_shouldReturnAllTanks() {
        //given
        when(tankRepo.findAll()).thenReturn(List.of(tank));
        //when
        List<Tank> actual = tankService.getAllTanks();
        //then
        assertEquals(actual, List.of(tank));
    }

    @Test
    void addTank_shouldAddNewTank() {
        //given
        when(tankRepo.save(tank)).thenReturn(tank);
        //when
        Tank actual = tankService.addTank(tank);
        //then
        assertEquals(actual, tank);
    }

    @Test
    void deleteTank_shouldRemoveTank() {
        //given
        String testId = "1";
        //when
        tankService.deleteTank(testId);
        //then
        verify(tankRepo).deleteById(testId);
    }
}