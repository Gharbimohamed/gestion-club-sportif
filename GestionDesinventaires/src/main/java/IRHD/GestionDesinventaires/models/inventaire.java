package IRHD.GestionDesinventaires.models;

import javax.persistence.*;
import java.awt.*;
import java.util.Date;

@Entity
@Table(name = "inventaire", schema = "gestioninventaire")
public class inventaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date date;
    private String descriptif;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescriptif() {
        return descriptif;
    }

    public void setDescriptif(String descriptif) {
        this.descriptif = descriptif;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
