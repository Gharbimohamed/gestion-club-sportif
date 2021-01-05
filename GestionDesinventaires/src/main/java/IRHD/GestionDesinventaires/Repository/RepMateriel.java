package IRHD.GestionDesinventaires.Repository;

import IRHD.GestionDesinventaires.models.MaterielsPedagogique;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepMateriel extends JpaRepository<MaterielsPedagogique, Integer> {
}
