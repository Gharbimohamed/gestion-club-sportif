package IRHD.Gestiondesressources.Model;

import javax.persistence.*;

@Entity
@Table(name="ressources", schema = "gestiondesressources")
public class Ressources {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom_ressource;
    private String type_ressource;
    private String montant;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom_ressource() {
        return nom_ressource;
    }

    public void setNom_ressource(String nom_ressource) {
        this.nom_ressource = nom_ressource;
    }

    public void setType_ressource(String type_ressource) {
        this.type_ressource = type_ressource;
    }

    public String getType_ressource() {
        return type_ressource;
    }

    public String getMontant() {
        return montant;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }

    public Ressources() {
    }
}
