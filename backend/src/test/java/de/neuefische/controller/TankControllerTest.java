package de.neuefische.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TankControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void getAllTanks_shouldReturnAllTanksFromDB() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/my-tanks"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    void addTank_shouldAddNewTankToDB() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/my-tanks/new-tank")
                .contentType("application/json")
                .content("""
                            {
                             "name": "nano",
                             "waterType": "Süßwasser",
                             "tankSizeInLitres": 45,
                             "tankTemperature": 23,
                             "tankPh": 6.7  
                           }
                        """))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            {
                             "name": "nano",
                             "waterType": "Süßwasser",
                              "tankSizeInLitres": 45,
                              "tankTemperature": 23,
                              "tankPh": 6.7  
                            }
                        """)).andExpect(jsonPath("$.id").isNotEmpty());
    }
}