package IRHD.Serviceentraienement.Controller;


import IRHD.Serviceentraienement.metier.MetierPersonne;
import IRHD.Serviceentraienement.models.Joueur;
import IRHD.Serviceentraienement.models.entraineur;
import IRHD.Serviceentraienement.models.equipe;
import IRHD.Serviceentraienement.repository.RepositoryJoueur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class ControlleurPersonne {

    @Autowired
    private RepositoryJoueur repj;

    @Autowired
    private MetierPersonne metpers;


    @RequestMapping(value = "/listejoueur", method = RequestMethod.GET)
    public List<Joueur> listeplayer(){
        System.out.println("gbhdfb;fngbjf");
        return repj.findAll();
    }
    /*
    @RequestMapping(value = "/listejoueurteam/{id}", method = RequestMethod.GET)
    public List<Joueur> listeplayerbyteam(@PathVariable Integer id){
        System.out.println("gbhdfb;fngbjf");
        return metpers.listeejoueurs(id);
    }

     */
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value="/updateplayer/{id}")
    public String updateplayerbbyid( @PathVariable String id, @RequestBody Joueur team){
        Optional<Joueur> team1= metpers.trouver(parseInt(id));
        System.out.println("gbhdfb;fngbjf");
        if(team1.isPresent()){
            team.setId_personne(parseInt(id));
            team.setNom(team.getNom());
            team.setPrenom(team.getPrenom());
            team.setPosition(team.getPosition());
            team.setAge(team.getAge());
            repj.save(team);
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return " updated with succes";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/addjoueur",method= RequestMethod.POST)
    public String Addjoueur(@RequestBody Joueur joueur){

        System.out.println("voila l'object que j'ai envoyé "+joueur);
        repj.save(joueur);
        return" saved with succes";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/player/{id}", method = RequestMethod.GET)
    public Optional<Joueur> trainerbyid(@PathVariable String id){
        return repj.findById(parseInt(id));
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
