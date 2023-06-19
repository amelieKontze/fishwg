package de.neuefische.repository;

import de.neuefische.model.Tank;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TankRepo extends MongoRepository<Tank, String> {
}
