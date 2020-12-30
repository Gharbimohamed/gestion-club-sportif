package IRHD.GestionDesinventaires.Metiers;

import IRHD.GestionDesinventaires.models.inventaire;

import java.util.List;
import java.util.Optional;

public interface MetinventaireImpl {

    public List<inventaire> listeinventaire();
    public Optional<inventaire> trouver(Integer id);
}
