package IRHD.Gestiondesressources.Metier;

import IRHD.Gestiondesressources.Model.Ressources;
import IRHD.Gestiondesressources.Repository.RessourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Ressourcemet implements RessourceImplMet{

    @Autowired
    private RessourceRepo ressrepo;

    @Override
    public List<Ressources> listeressources() {
        return ressrepo.findAll();
    }

    @Override
    public Optional<Ressources> trouver(Integer id) {
        return ressrepo.findById(id);
    }
}
