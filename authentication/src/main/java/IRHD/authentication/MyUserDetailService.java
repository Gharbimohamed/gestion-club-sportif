package IRHD.authentication;

import IRHD.authentication.Models.User;
import IRHD.authentication.Repository.UsserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailService implements UserDetailsService {
    @Autowired
    UsserRepository userrep;
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = userrep.findByUserName(s);

        user.orElseThrow(()-> new UsernameNotFoundException("utilisateur introuvable"));
        return user.map(MyUserdetails::new).get();
    }
}
