package IRHD.Serviceentraienement.models;

import org.hibernate.Incubating;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "entrainement", schema="gestion")
public class entrainement {// class name should be In UpperCase the first letter
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id_entrainement; //each class has an id, directly name it id not id_equipent //instead of int user Integer
    private String categorie; // la categorie de l'equipe minime cadet junior ...etc.
    private Date date;

    public int getId_entrainement() {
        return id_entrainement;
    }

    public void setId_entrainement(int id_entrainement) {
        this.id_entrainement = id_entrainement;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public entrainement(int id_entrainement, Date date) { // constructor using field
        this.id_entrainement = id_entrainement;
        this.date = date;
    }

    public entrainement() {// default constructor , superclass contructor
    }
}
// hada rah mlih
//bon courage , had had les colloc ta3 khra thnks a lot   merciiiiiiiiiiiiiiiiii arigato salaktni.