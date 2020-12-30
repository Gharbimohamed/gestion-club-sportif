package IRHD.ServiceDepenses.models;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="ListeMatches", schema = "gestion")
public class ListeMatches {
    // la liste des matches et une tables remplis au paravant donnée par la fédération
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int Id;
    private Date date;
    private String lieux;
    private String categorie;
}
