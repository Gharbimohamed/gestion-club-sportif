package IRHD.GestionDesinventaires.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="MetrielPedagogique", schema="gestioninventaire")
public class MaterielsPedagogique {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nom_materiel;
    private String type_materiel;
    private Date date_ajout;
    private int quantite;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_inventaire", referencedColumnName = "id",  nullable=false)
    private inventaire inventaires;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNom_materiel() {
        return nom_materiel;
    }

    public void setNom_materiel(String nom_materiel) {
        this.nom_materiel = nom_materiel;
    }

    public String getType_materiel() {
        return type_materiel;
    }

    public void setType_materiel(String type_materiel) {
        this.type_materiel = type_materiel;
    }

    public Date getDate_ajout() {
        return date_ajout;
    }

    public void setDate_ajout(Date date_ajout) {
        this.date_ajout = date_ajout;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public inventaire getInventaires() {
        return inventaires;
    }

    public void setInventaires(inventaire inventaires) {
        this.inventaires = inventaires;
    }

}
