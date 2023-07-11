package de.neuefische.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("Tank")
@Builder
public class Tank {
    private String id;
    private String name;
    private String waterType;
    private int tankSizeInLitres;
    private int tankTemperature;
    private List<Fish> residentFish;
    private double tankPh;
    private String tankOwner;
}
