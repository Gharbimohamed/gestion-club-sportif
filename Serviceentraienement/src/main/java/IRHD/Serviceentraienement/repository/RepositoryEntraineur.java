package IRHD.Serviceentraienement.repository;

import IRHD.Serviceentraienement.models.entraineur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RepositoryEntraineur extends JpaRepository<entraineur, Integer> {

}
