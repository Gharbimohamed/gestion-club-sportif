package IRHD.Serviceentraienement.models;

import javax.persistence.*;


@Entity
@Table(name="Entraineur", schema = "gestion")

public class entraineur extends personne {

    private String exeprience;


    public String getExeprience() {
        return exeprience;
    }

    public void setExeprience(String exeprience) {
        this.exeprience = exeprience;
    }


    public entraineur() {

    }

    public entraineur(int id_personne, String nom, String prenom, int age, String exeprience) {
        super(id_personne, nom, prenom, age);
        this.exeprience = exeprience;
    }
}
