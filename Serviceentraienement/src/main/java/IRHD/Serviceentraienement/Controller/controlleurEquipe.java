package IRHD.Serviceentraienement.Controller;

import IRHD.Serviceentraienement.metier.MetierEquipe;
import IRHD.Serviceentraienement.models.entraineur;
import IRHD.Serviceentraienement.models.equipe;
import IRHD.Serviceentraienement.repository.repositoryEquipe;
import org.apache.coyote.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class controlleurEquipe {

    @Autowired
    private MetierEquipe metequip;

    @Autowired
    private repositoryEquipe eqrepo;

    @RequestMapping(value = "/listeequip", method = RequestMethod.GET)
    public List<equipe> listeequip(){
        return metequip.listeequipee();
    }

    @RequestMapping(value = "/listejoueurseqp", method = RequestMethod.GET)
    public List<equipe> listejoueurseqp(){
        return metequip.listejoueurs();
    }



    @RequestMapping(value="/addEquip",method= RequestMethod.POST)
    public String AddEquipe(@RequestBody equipe equipe){
        System.out.println("voila l'object que j'ai envoyé"+equipe);
        eqrepo.save(equipe);
        return" saved with succes";
    }
    @DeleteMapping(value = "/deleteequipe/{id}")
    public String deleteteam(@PathVariable Integer id){
        Optional<equipe> team= metequip.trouver(id);
        if(team.isPresent()){
            eqrepo.delete(team.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return" deleted with succes";
    }
    @PutMapping(value="/updateam")
    public String updateteam(@RequestBody equipe team){
        eqrepo.save(team);
        return " updated with succes";
    }

}
