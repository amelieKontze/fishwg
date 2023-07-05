package de.neuefische.security;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends MongoRepository<UserModel, String> {

    Optional<UserModel> findUserByUsername(String username);

}
