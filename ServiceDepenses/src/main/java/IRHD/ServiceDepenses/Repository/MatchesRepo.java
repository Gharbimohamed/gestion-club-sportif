package IRHD.ServiceDepenses.Repository;

import IRHD.ServiceDepenses.models.ListeMatches;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchesRepo extends JpaRepository<ListeMatches,Integer> {

}
