package IRHD.GestionDesinventaires.Metiers;

import IRHD.GestionDesinventaires.Repository.RepMateriel;
import IRHD.GestionDesinventaires.models.MaterielsPedagogique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MetMateriel implements MetMaterielImpl{

    @Autowired
    private RepMateriel repmat;
    @Override
    public List<MaterielsPedagogique> listemateriel() {
        return repmat.findAll();
    }

    @Override
    public Optional<MaterielsPedagogique> trouver(Integer id) {
        return repmat.findById(id);
    }
}
