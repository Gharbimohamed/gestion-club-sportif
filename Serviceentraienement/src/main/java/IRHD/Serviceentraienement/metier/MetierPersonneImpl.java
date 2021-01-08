package IRHD.Serviceentraienement.metier;

import IRHD.Serviceentraienement.models.Joueur;
import IRHD.Serviceentraienement.models.equipe;

import java.util.List;
import java.util.Optional;

public interface MetierPersonneImpl {

    public List<Joueur> listeejoueurs(Integer id);
    public Optional<Joueur> trouver(Integer id);
}
