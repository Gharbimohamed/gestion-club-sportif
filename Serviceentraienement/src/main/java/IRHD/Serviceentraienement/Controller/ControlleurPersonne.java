package IRHD.Serviceentraienement.Controller;


import IRHD.Serviceentraienement.metier.MetierPersonne;
import IRHD.Serviceentraienement.models.Joueur;
import IRHD.Serviceentraienement.repository.RepositoryJoueur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ControlleurPersonne {

    @Autowired
    private RepositoryJoueur repj;

    @Autowired
    private MetierPersonne metpers;


    @RequestMapping(value = "/listejoueur", method = RequestMethod.GET)
    public List<Joueur> listeequip(){
        System.out.println("gbhdfb;fngbjf");
        return metpers.listeejoueurs();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/addjoueur",method= RequestMethod.POST)
    public String Addjoueur(@RequestBody Joueur joueur){

        System.out.println("voila l'object que j'ai envoyé "+joueur);
        repj.save(joueur);
        return" saved with succes";
    }

    @DeleteMapping(value = "/deletejoueur/{id}")
    public String deletejoueur(@PathVariable Integer id){
        Optional<Joueur> joueur= metpers.trouver(id);
        if(joueur.isPresent()){
            repj.delete(joueur.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return" deleted with succes";
    }
    @PutMapping(value="/updateplayer")
    public String updateteam(@RequestBody Joueur joueur){
        repj.save(joueur);
        return " updated with succes";
    }
}
