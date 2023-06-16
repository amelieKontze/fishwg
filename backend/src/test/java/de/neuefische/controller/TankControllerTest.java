package de.neuefische.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

}