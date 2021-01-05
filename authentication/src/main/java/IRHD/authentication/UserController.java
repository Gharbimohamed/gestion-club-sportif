package IRHD.authentication;


import IRHD.authentication.Models.User;
import IRHD.authentication.Repository.UsserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UsserRepository use;


    @GetMapping("/signin/{username}/{password}")
    public User user(@PathVariable String username,@PathVariable String password){
        return use.finduser(username, password);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/adduser",method= RequestMethod.POST)
    public String Adduserr(@RequestBody User equip){
        System.out.println("voila l'object que j'ai envoyé"+equip);
        use.save(equip);
        return" saved with succes";
    }
}
