package IRHD.Gestiondesressources.Controllers;


import IRHD.Gestiondesressources.Metier.Ressourcemet;
import IRHD.Gestiondesressources.Model.Ressources;
import IRHD.Gestiondesressources.Repository.RessourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class RessourceControlleur {

    @Autowired
    private Ressourcemet metress;

    @Autowired
    private RessourceRepo ressrep;
    // liste des ressources
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/listeressources", method = RequestMethod.GET)
    public List<Ressources> listeequip(){
        return metress.listeressources();
    }

    // ressources par identifiant
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/ressource/{id}", method = RequestMethod.GET)
    public Optional<Ressources> eqp(@PathVariable String id){
        return ressrep.findById(parseInt(id));
    }

    // la suppression d'une ressource:
   // @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(value = "/deleteressource/{id}")
    public String deleteteam(@PathVariable Integer id){
        Optional<Ressources> team= metress.trouver(id);
        System.out.println("gbhdfb;fngbjf");
        if(team.isPresent()){
            ressrep.delete(team.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }
        return" deleted with succes";
    }
    // la modification d'une ressource
   // @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value="/updateressource/{id}")
    public String updateressourcebbyid( @PathVariable String id, @RequestBody Ressources team){
        Optional<Ressources> team1= metress.trouver(parseInt(id));
        System.out.println("gbhdfb;fngbjf");
        if(team1.isPresent()){
            team.setId(parseInt(id));
            team.setNom_ressource(team.getNom_ressource());
            team.setType(team.getType());
            team.setMontant(team.getMontant());
            ressrep.save(team);
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return " updated with succes";
    }

    // l'ajout d'une ressource

    @RequestMapping(value="/addressource",method= RequestMethod.POST)
    public String Addressource(@RequestBody Ressources ressour){
        System.out.println("voila l'object que j'ai envoyé"+ressour);
        ressrep.save(ressour);
        return" saved with succes";
    }

}
