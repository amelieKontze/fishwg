package de.neuefische.security;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("User")
public class UserModel {

    private String id;
    private String name;
    private String username;
    private String email;
    private String password;

}
