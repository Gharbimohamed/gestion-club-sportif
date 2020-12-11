package IRHD.Serviceentraienement.metier;

import IRHD.Serviceentraienement.models.entraineur;
import IRHD.Serviceentraienement.repository.RepositoryEntraineur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MetierEntraineur implements MetierEntraineurImpl{


    @Autowired
    private RepositoryEntraineur trainrep;


    @Override
    public List<entraineur> listeentraineur() {
        return trainrep.findAll();
    }
    public Optional<entraineur> trouver(Integer id) {
        return trainrep.findById(id);
    }
}
