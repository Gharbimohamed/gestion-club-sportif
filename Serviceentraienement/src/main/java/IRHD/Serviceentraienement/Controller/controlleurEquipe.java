package IRHD.Serviceentraienement.Controller;

import IRHD.Serviceentraienement.metier.MetierEquipe;
import IRHD.Serviceentraienement.models.equipe;
import IRHD.Serviceentraienement.repository.repositoryEquipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class controlleurEquipe {

    @Autowired
    private MetierEquipe metequip;

    @Autowired
    private repositoryEquipe eqrepo;


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/listeequip", method = RequestMethod.GET)
    public List<equipe> listeequip(){
        return metequip.listeequipee();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/listejoueurseqp", method = RequestMethod.GET)
    public List<equipe> listejoueurseqp(){
        return metequip.listejoueurs();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/equipe/{id}", method = RequestMethod.GET)
    public Optional<equipe> eqp(@PathVariable String id){
        return eqrepo.findById(parseInt(id));
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/addEquip",method= RequestMethod.POST)
    public String AddEquipe(@RequestBody equipe equip){
        System.out.println("voila l'object que j'ai envoyé"+equip);
        eqrepo.save(equip);
        return" saved with succes";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(value = "/deleteequipe/{id}")
    public String deleteteam(@PathVariable Integer id){
        Optional<equipe> team= metequip.trouver(id);
        System.out.println("gbhdfb;fngbjf");
        if(team.isPresent()){
            eqrepo.delete(team.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return" deleted with succes";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value="/updateam")
    public String updateteam(@RequestBody equipe team){
        eqrepo.save(team);
        return " updated with succes";
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value="/updateam/{id}")
    public String updateteambbyid(@RequestBody equipe team, @PathVariable Integer id){
        Optional<equipe> team1= metequip.trouver(id);
        System.out.println("gbhdfb;fngbjf");
        if(team1.isPresent()){
            team.setId_equipe(id);
            team.setNiveau(team.getNiveau());
            team.setAge_inf(team.getAge_inf());
            team.setAge_sup(team.getAge_sup());
            eqrepo.save(team);
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return " updated with succes";
    }

}
