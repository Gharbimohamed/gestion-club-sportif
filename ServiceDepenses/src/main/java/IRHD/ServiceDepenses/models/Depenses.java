package IRHD.ServiceDepenses.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Depenses", schema ="gestion")
public class Depenses {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int Id;
    private float montant;
    private Date date;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public float getMontant() {
        return montant;
    }

    public void setMontant(float montant) {
        this.montant = montant;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    public Depenses(){

    }
    public Depenses(int id, float montant, Date date){
       this.Id=id;
       this.montant=montant;
       this.date=date;
    }
}
