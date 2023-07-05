package de.neuefische.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.neuefische.model.Tank;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class TankControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @WithMockUser(username = "user", password = "123")
    void getAllTanks_shouldReturnAllTanksFromDB() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/tank/my-tanks"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "user", password = "123")
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
                                """)
                        .with(csrf()))
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
    @DirtiesContext
    @WithMockUser(username = "user", password = "123")
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
                                """)
                        .with(csrf()))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        ObjectMapper objectMapper = new ObjectMapper();
        Tank tank = objectMapper.readValue(content, Tank.class);

        mockMvc.perform(MockMvcRequestBuilders.delete("/api/tank/delete/" + tank.getId())
                        .with(csrf()))
                .andExpect(status().isOk());
        mockMvc.perform(MockMvcRequestBuilders.get("/api/tank/my-tanks"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));

    }

    @Test
    @DirtiesContext
    @WithMockUser(username = "user", password = "123")
    void updateTank_shouldUpdateInformationOnExistingTank() throws Exception {
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
                                """)
                        .with(csrf()))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();

        ObjectMapper objectMapper = new ObjectMapper();
        Tank tank = objectMapper.readValue(content, Tank.class);

        mockMvc.perform(MockMvcRequestBuilders.put("/api/tank/update-tank/" + tank.getId())
                        .contentType("application/json")
                        .content("""
                                { 
                                         "name": "nano",
                                         "waterType": "Süßwasser",
                                         "tankSizeInLitres": 450,
                                         "tankTemperature": 23,
                                         "tankPh": 6.7 , 
                                         "residentFish": []
                                       }
                                    """)
                        .with(csrf()))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                           "name": "nano",
                           "waterType": "Süßwasser",
                           "tankSizeInLitres": 450,
                           "tankTemperature": 23,
                           "tankPh": 6.7 , 
                           "residentFish": []
                         }
                          """));
    }


}