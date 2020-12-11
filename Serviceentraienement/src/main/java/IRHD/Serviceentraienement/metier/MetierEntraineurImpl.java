package IRHD.Serviceentraienement.metier;

import IRHD.Serviceentraienement.models.entraineur;

import java.util.List;
import java.util.Optional;

public interface MetierEntraineurImpl {

    public List<entraineur> listeentraineur();
    public Optional<entraineur> trouver(Integer id);
}
