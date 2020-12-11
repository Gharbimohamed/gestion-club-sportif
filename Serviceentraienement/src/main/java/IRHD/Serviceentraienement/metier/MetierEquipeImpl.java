package IRHD.Serviceentraienement.metier;

import IRHD.Serviceentraienement.models.entraineur;
import IRHD.Serviceentraienement.models.equipe;

import java.util.List;
import java.util.Optional;

public interface MetierEquipeImpl {

    public List<equipe> listeequipee();
    public List<equipe> listejoueurs();
    public Optional<equipe> trouver(Integer id);
}
