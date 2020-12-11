package IRHD.Serviceentraienement.models;

import javax.persistence.*;

@MappedSuperclass
public class personne {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_personne;
    private String nom;
    private String prenom;
    private int age;

    public int getId_personne() {
        return id_personne;
    }

    public void setId_personne(int id_personne) {
        this.id_personne = id_personne;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


    public personne(int id_personne, String nom, String prenom, int age) {
        this.id_personne = id_personne;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    public personne( String nom, String prenom, int age) {

        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    public personne() {
    }
}
