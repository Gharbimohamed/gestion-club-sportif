package IRHD.Serviceentraienement.models;

import java.util.Date;

public class entrainement {

    private int id_entrainement;
    private String type_entraienement;
    private Date date;

    public int getId_entrainement() {
        return id_entrainement;
    }

    public void setId_entrainement(int id_entrainement) {
        this.id_entrainement = id_entrainement;
    }

    public String getType_entraienement() {
        return type_entraienement;
    }

    public void setType_entraienement(String type_entraienement) {
        this.type_entraienement = type_entraienement;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public entrainement(int id_entrainement, String type_entraienement, Date date) {
        this.id_entrainement = id_entrainement;
        this.type_entraienement = type_entraienement;
        this.date = date;
    }

    public entrainement() {
    }
}
