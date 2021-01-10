package IRHD.GestionDesinventaires.Controllers;

import IRHD.GestionDesinventaires.Metiers.MetMateriel;
import IRHD.GestionDesinventaires.Repository.RepMateriel;
import IRHD.GestionDesinventaires.models.MaterielsPedagogique;
import IRHD.GestionDesinventaires.models.inventaire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static java.lang.Integer.parseInt;

@RestController
public class ControlleurMateriel {
    @Autowired
    private MetMateriel metiermat;

    @Autowired
    private RepMateriel repmat;


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/listemateriel", method = RequestMethod.GET)
    public List<MaterielsPedagogique> listemateriels(){
        return metiermat.listemateriel();
    }



    @RequestMapping(value="/addmateriel",method= RequestMethod.POST)
    public String Addmeteriel(@RequestBody MaterielsPedagogique materiel){
        System.out.println("voila l'object que j'ai envoyé"+materiel);
        repmat.save(materiel);
        return" saved with succes";
    }
    @DeleteMapping(value = "/deletemateriel/{id}")
    public String deletematariel(@PathVariable Integer id){
        Optional<MaterielsPedagogique> team= metiermat.trouver(id);
        if(team.isPresent()){
            repmat.delete(team.get());
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return" deleted with succes";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/materiel/{id}", method = RequestMethod.GET)
    public Optional<MaterielsPedagogique> inventairebyid(@PathVariable String id){
        return repmat.findById(parseInt(id));
    }


    @PutMapping(value="/updatemateriel/{id}")
    public String updatematerielbbyid( @PathVariable String id, @RequestBody MaterielsPedagogique team){
        Optional<MaterielsPedagogique> team1= metiermat.trouver(parseInt(id));
        System.out.println("gbhdfb;fngbjf");
        if(team1.isPresent()){
            team.setId(parseInt(id));
            team.setNom_materiel(team.getNom_materiel());
            if(team.getDate_ajout()!=null){
                team.setDate_ajout(team.getDate_ajout());
            }
            team.setType_materiel(team.getType_materiel());
            team.setQuantite(team.getQuantite());
            repmat.save(team);
        }else{
            throw new RuntimeException("equipe introuvable");
        }

        return " updated with succes";
    }
}
