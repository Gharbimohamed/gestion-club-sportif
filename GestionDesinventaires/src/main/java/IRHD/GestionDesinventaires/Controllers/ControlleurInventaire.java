package IRHD.GestionDesinventaires.Controllers;

import IRHD.GestionDesinventaires.Metiers.Metinventaire;
import IRHD.GestionDesinventaires.Repository.repInventaire;
import IRHD.GestionDesinventaires.models.inventaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class ControlleurInventaire {

    @Autowired
    private Metinventaire metierinv;

    @Autowired
    private repInventaire repinv;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/listeinventaires", method = RequestMethod.GET)
    public List<inventaire> listeinve(){
        return metierinv.listeinventaire();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/inventaire/{id}", method = RequestMethod.GET)
    public Optional<inventaire> inventairebyid(@PathVariable String id){
        return repinv.findById(parseInt(id));
    }

    @RequestMapping(value="/addinventaire",method= RequestMethod.POST)
    public String Addinventaire(@RequestBody inventaire inventaire){
        System.out.println("voila l'object que j'ai envoyé"+inventaire);
        repinv.save(inventaire);
        return" saved with succes";
    }
    @DeleteMapping(value = "/deleteinventaire/{id}")
    public String deleteinventaire(@PathVariable Integer id){
        Optional<inventaire> team= metierinv.trouver(id);
        if(team.isPresent()){
            repinv.delete(team.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return" deleted with succes";
    }
    @PutMapping(value="/updateam/{id}")
    public String updateinventaire(@RequestBody inventaire inv){
        repinv.save(inv);
        return " updated with succes";
    }
    @PutMapping(value="/updateinventaire/{id}")
    public String updateressourcebbyid( @PathVariable String id, @RequestBody inventaire team){
        Optional<inventaire> team1= metierinv.trouver(parseInt(id));
        System.out.println("gbhdfb;fngbjf");
        if(team1.isPresent()){
            if(team.getDate()!=null){
                team.setDate(team.getDate());
            }
            team.setId(parseInt(id));
            team.setDescriptif(team.getDescriptif());
            repinv.save(team);
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return " updated with succes";
    }
}
