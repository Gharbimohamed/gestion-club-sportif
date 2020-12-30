package IRHD.Serviceentraienement.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "equipe", schema = "gestion")

public class equipe {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_equipe;
    private String niveau;
    private int age_inf;
    private int age_sup;
    private int nombre_joueurs;
    private String etat;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_entraineur", referencedColumnName = "id_personne",  nullable=false)
    private entraineur trainer;

    public entraineur getTrainer() {
        return trainer;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public String getEtat() {
        return etat;
    }

    public void setTrainer(entraineur trainer) {
        this.trainer = trainer;
    }

    public int getId_equipe() {
        return id_equipe;
    }

    public void setId_equipe(int id_equipe) {
        this.id_equipe = id_equipe;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }

    public int getAge_inf() {
        return age_inf;
    }

    public void setAge_inf(int age_inf) {
        this.age_inf = age_inf;
    }

    public int getAge_sup() {
        return age_sup;
    }

    public void setAge_sup(int age_sup) {
        this.age_sup = age_sup;
    }

    public int getNombre_joueurs() {
        return nombre_joueurs;
    }

    public void setNombre_joueurs(int nombre_joueurs) {
        this.nombre_joueurs = nombre_joueurs;
    }

    public equipe() {
    }

    public equipe(String niveau, int age_inf, int age_sup, int nombre_joueurs) {
        this.niveau = niveau;
        this.age_inf = age_inf;
        this.age_sup = age_sup;
        this.nombre_joueurs = nombre_joueurs;
    }
}
//win raho probleme