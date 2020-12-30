package IRHD.Serviceentraienement.Controller;

import IRHD.Serviceentraienement.metier.MetierEntraineur;
import IRHD.Serviceentraienement.models.entraineur;
import IRHD.Serviceentraienement.repository.RepositoryEntraineur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class ControlleurEntraineur {
    @Autowired
    private RepositoryEntraineur reptrainer;

    @Autowired
    private MetierEntraineur mettrainer;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/listetrainer", method = RequestMethod.GET)
    public List<entraineur> listetrainers(){
        return mettrainer.listeentraineur();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/trainer/{id}", method = RequestMethod.GET)
    public Optional<entraineur> trainerbyid(@PathVariable String id){
        return reptrainer.findById(parseInt(id));
    }

    @RequestMapping(value="/addtrainer",method= RequestMethod.POST)
    public String Addtrainer(@RequestBody entraineur trainer){
        reptrainer.save(trainer);
        return" saved with succes";
    }

    @DeleteMapping(value = "/deletetrainer/{id}")
    public String deletetrainer(@PathVariable Integer id){
        Optional<entraineur> trainer= mettrainer.trouver(id);
        if(trainer.isPresent()){
            reptrainer.delete(trainer.get());
        }else{
            throw new RuntimeException("entraineur introuvable");
        }

        return" deleted with succes";
    }
    @PutMapping(value="/updatetrainer")
    public String updatetrainer(@RequestBody entraineur trainer){
        reptrainer.save(trainer);
        return " updated with succes";
    }
}
