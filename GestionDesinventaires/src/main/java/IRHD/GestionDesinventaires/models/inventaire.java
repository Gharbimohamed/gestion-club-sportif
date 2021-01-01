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
    private TextArea descriptif;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public TextArea getDescriptif() {
        return descriptif;
    }

    public void setDescriptif(TextArea descriptif) {
        this.descriptif = descriptif;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
