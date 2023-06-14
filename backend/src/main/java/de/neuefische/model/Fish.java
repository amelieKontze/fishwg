package de.neuefische.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("Fish")
@Builder
public class Fish {
    private String id;
    private String name;
    private String scientificName;
    private String image;
    private String waterType;
    private String origin;
    private int minTankSizeInLitres;
    private String temperatureInCelsius;
    private String pH;
    private String temperament;
}
