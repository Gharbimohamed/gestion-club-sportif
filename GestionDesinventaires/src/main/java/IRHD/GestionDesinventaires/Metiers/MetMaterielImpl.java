package IRHD.GestionDesinventaires.Metiers;

import IRHD.GestionDesinventaires.models.MaterielsPedagogique;
import IRHD.GestionDesinventaires.models.inventaire;

import java.util.List;
import java.util.Optional;

public interface MetMaterielImpl {

    public List<MaterielsPedagogique> listemateriel();
    public Optional<MaterielsPedagogique> trouver(Integer id);
}
