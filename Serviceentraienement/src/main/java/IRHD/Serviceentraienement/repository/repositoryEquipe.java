package IRHD.Serviceentraienement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import IRHD.Serviceentraienement.models.equipe;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface repositoryEquipe extends JpaRepository<equipe, Integer> {
  //trés bien ,
    @Query("select distinct e from equipe e")
    List<equipe> listejoueurseqp();

}
