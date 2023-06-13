package de.neuefische.repository;

import de.neuefische.model.Fish;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FishRepo extends MongoRepository<Fish, String> {
}
