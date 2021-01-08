package IRHD.Serviceentraienement.repository;


import IRHD.Serviceentraienement.models.Joueur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryJoueur extends JpaRepository<Joueur, Integer> {
    @Query("select j.id_personne from Joueur j, equipe e  where j.equipee=?1")
    List<Joueur> listejoueurs(Integer id);

    @Query("delete from Joueur u where u.id_personne in ?1")
    void deleteUsersWithIds(List<Integer> ids);
}
