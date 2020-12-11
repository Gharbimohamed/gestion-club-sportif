package IRHD.Serviceentraienement.metier;

import IRHD.Serviceentraienement.models.equipe;
import IRHD.Serviceentraienement.repository.repositoryEquipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MetierEquipe implements MetierEquipeImpl {

    @Autowired
    private repositoryEquipe equiperep;



    @Override
    public List<equipe> listeequipee() {
        return  equiperep.findAll();
    }
    public List<equipe> listejoueurs() {
        return  equiperep.listejoueurseqp();
    }

    @Override
    public Optional<equipe> trouver(Integer id) {
        return equiperep.findById(id);
    }

}
