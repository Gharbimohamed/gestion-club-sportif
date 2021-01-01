package IRHD.Gestiondesressources.Metier;


import IRHD.Gestiondesressources.Model.Ressources;

import java.util.List;
import java.util.Optional;

public interface RessourceImplMet {
    public List<Ressources> listeressources();
    public Optional<Ressources> trouver(Integer id);
}
