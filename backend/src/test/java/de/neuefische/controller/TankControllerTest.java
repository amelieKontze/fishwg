package de.neuefische.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.model.Tank;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TankControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void getAllTanks_shouldReturnAllTanksFromDB() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/tank/my-tanks"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    void addTank_shouldAddNewTankToDB() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/tank/new-tank")
                        .contentType("application/json")
                        .content("""
                                    {
                                     "name": "nano",
                                     "waterType": "Süßwasser",
                                     "tankSizeInLitres": 45,
                                     "tankTemperature": 23,
                                     "tankPh": 6.7 , 
                                     "residentFish": []
                                   }
                                """))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                            {
                             "name": "nano",
                             "waterType": "Süßwasser",
                              "tankSizeInLitres": 45,
                              "tankTemperature": 23,
                              "tankPh": 6.7 ,
                              "residentFish": [] 
                            }
                        """)).andExpect(jsonPath("$.id").isNotEmpty());
    }

    @Test
    void deleteTank_shouldRemoveTankFromDB() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/api/tank/new-tank")
                        .contentType("application/json")
                        .content("""
                                    {
                                     "name": "nano",
                                     "waterType": "Süßwasser",
                                     "tankSizeInLitres": 45,
                                     "tankTemperature": 23,
                                     "tankPh": 6.7 , 
                                     "residentFish": []
                                   }
                                """))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        ObjectMapper objectMapper = new ObjectMapper();
        Tank tank = objectMapper.readValue(content, Tank.class);

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/tank/delete/" + tank.getId()))
                .andExpect(status().isOk());
        mockMvc.perform(MockMvcRequestBuilders.get("/api/tank/my-tanks"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));

    }
}