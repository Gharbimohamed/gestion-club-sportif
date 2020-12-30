package IRHD.GestionDesinventaires.Repository;

import IRHD.GestionDesinventaires.models.inventaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface repInventaire extends JpaRepository<inventaire,Integer> {
}
