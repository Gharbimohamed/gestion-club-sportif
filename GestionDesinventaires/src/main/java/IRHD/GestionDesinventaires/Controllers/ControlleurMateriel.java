package IRHD.GestionDesinventaires.Controllers;

import IRHD.GestionDesinventaires.Metiers.MetMateriel;
import IRHD.GestionDesinventaires.Repository.RepMateriel;
import IRHD.GestionDesinventaires.models.MaterielsPedagogique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @PutMapping(value="/updatemateriel/{id}")
    public String updatemateriel(@RequestBody MaterielsPedagogique materiel){
        repmat.save(materiel);
        return " updated with succes";
    }
}
