package IRHD.Gestiondesressources.Repository;

import IRHD.Gestiondesressources.Model.Ressources;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RessourceRepo extends JpaRepository<Ressources,Integer> {

}
