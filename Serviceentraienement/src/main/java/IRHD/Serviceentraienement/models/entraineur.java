package IRHD.Serviceentraienement.models;

import java.util.Date;

public class entraineur {
    private int id_entraineur;
    private String nom;
    private String prenom;
    private Date date_naiss;
    private String exeprience;

    public int getId_entraineur() {
        return id_entraineur;
    }

    public void setId_entraineur(int id_entraineur) {
        this.id_entraineur = id_entraineur;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDate_naiss() {
        return date_naiss;
    }

    public void setDate_naiss(Date date_naiss) {
        this.date_naiss = date_naiss;
    }

    public String getExeprience() {
        return exeprience;
    }

    public void setExeprience(String exeprience) {
        this.exeprience = exeprience;
    }

    public entraineur(int id_entraineur, String nom, String prenom, Date date_naiss, String exeprience) {
        this.id_entraineur = id_entraineur;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naiss = date_naiss;
        this.exeprience = exeprience;
    }

    public entraineur() {

    }
}
