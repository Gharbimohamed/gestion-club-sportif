package IRHD.Serviceentraienement.models;

public class equipe {
    private int id_equipe;
    private String catégorie_equipe;
    private int nombre_joueurs;

    //l'ensemble des getters and setters
    public int getId_equipe() {
        return id_equipe;
    }

    public void setId_equipe(int id_equipe) {
        this.id_equipe = id_equipe;
    }

    public String getCatégorie_equipe() {
        return catégorie_equipe;
    }

    public void setCatégorie_equipe(String catégorie_equipe) {
        this.catégorie_equipe = catégorie_equipe;
    }

    public int getNombre_joueurs() {
        return nombre_joueurs;
    }

    public void setNombre_joueurs(int nombre_joueurs) {
        this.nombre_joueurs = nombre_joueurs;
    }

    //constructeur contenant toutes les entités
    public equipe(int id_equipe, String catégorie_equipe, int nombre_joueurs) {
        this.id_equipe = id_equipe;
        this.catégorie_equipe = catégorie_equipe;
        this.nombre_joueurs = nombre_joueurs;
    }

    // constructeur vide
    public equipe() {
    }

}
