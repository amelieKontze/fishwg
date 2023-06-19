package de.neuefische.service;

import de.neuefische.model.Tank;
import de.neuefische.repository.TankRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TankServiceTest {

    TankRepo tankRepo = mock(TankRepo.class);

    Tank tank = new Tank(
            "1",
            "30l Nano",
            "Süßwasser",
            30,
            27,
            7.5
    );

    TankService tankService = new TankService(tankRepo);

    @Test
    void getAllTanks() {
        //given
        when(tankRepo.findAll()).thenReturn(List.of(tank));
        //when
        List<Tank> actual = tankService.getAllTanks();
        //then
        assertEquals(actual, List.of(tank));
    }
}