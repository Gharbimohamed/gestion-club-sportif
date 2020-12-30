package IRHD.Serviceentraienement.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Joueur", schema = "gestion")
public class Joueur extends personne{

    private String position;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_equipej", referencedColumnName = "id_equipe",  nullable=false)
    private equipe equipee;

    public void setEquipee(equipe equipee) {
        this.equipee = equipee;
    }

    public equipe getEquipee() {
        return equipee;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Joueur() {
    }


    public Joueur(int id_personne, String nom, String prenom, int age, String position) {
        super(id_personne, nom, prenom, age);
        this.position = position;
    }
    public Joueur( String nom, String prenom, int age, String position, equipe equip) {
        super(nom, prenom, age);
        this.position = position;
        this.equipee = equip;
    }
}
