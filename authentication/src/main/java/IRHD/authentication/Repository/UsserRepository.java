package IRHD.authentication.Repository;

import IRHD.authentication.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.Optional;

public interface UsserRepository extends JpaRepository<User,Integer> {

    Optional<User> findByUserName(String username);


    @Query("select distinct e from User e where e.userName= ?1 and e.password= ?2")
    User finduser(String username, String password);
}
