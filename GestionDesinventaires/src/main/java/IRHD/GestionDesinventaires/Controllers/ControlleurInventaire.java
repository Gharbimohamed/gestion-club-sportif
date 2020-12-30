package IRHD.GestionDesinventaires.Controllers;

import IRHD.GestionDesinventaires.Metiers.Metinventaire;
import IRHD.GestionDesinventaires.Repository.repInventaire;
import IRHD.GestionDesinventaires.models.inventaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ControlleurInventaire {

    @Autowired
    private Metinventaire metierinv;

    @Autowired
    private repInventaire repinv;

    @RequestMapping(value = "/listeinventaires", method = RequestMethod.GET)
    public List<inventaire> listeequip(){
        return metierinv.listeinventaire();
    }



    @RequestMapping(value="/addinventaire",method= RequestMethod.POST)
    public String AddEquipe(@RequestBody inventaire inventaire){
        System.out.println("voila l'object que j'ai envoyé"+inventaire);
        repinv.save(inventaire);
        return" saved with succes";
    }
    @DeleteMapping(value = "/deleteinventaire/{id}")
    public String deleteteam(@PathVariable Integer id){
        Optional<inventaire> team= metierinv.trouver(id);
        if(team.isPresent()){
            repinv.delete(team.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return" deleted with succes";
    }
    @PutMapping(value="/updateam")
    public String updateteam(@RequestBody inventaire inv){
        repinv.save(inv);
        return " updated with succes";
    }
}
