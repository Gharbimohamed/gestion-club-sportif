package IRHD.GestionDesinventaires.Metiers;

import IRHD.GestionDesinventaires.Repository.repInventaire;
import IRHD.GestionDesinventaires.models.inventaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class Metinventaire implements MetinventaireImpl{
    @Autowired
    private repInventaire inventairerep;

    @Override
    public List<inventaire> listeinventaire() {
        return inventairerep.findAll();
    }

    @Override
    public Optional<inventaire> trouver(Integer id) {
        return inventairerep.findById(id);
    }


}
