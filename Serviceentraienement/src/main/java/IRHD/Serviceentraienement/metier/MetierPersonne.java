package IRHD.Serviceentraienement.metier;

import IRHD.Serviceentraienement.models.Joueur;
import IRHD.Serviceentraienement.repository.RepositoryJoueur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MetierPersonne implements MetierPersonneImpl {


    @Autowired
    private RepositoryJoueur repojoueur;

    @Override
    public List<Joueur> listeejoueurs() {
        return repojoueur.findAll();
    }

    @Override
    public Optional<Joueur> trouver(Integer id) {
        return repojoueur.findById(id);
    }
}
