package IRHD.ServiceDepenses.models;

public class paiments extends Depenses{

    private String categorie_paiement;
    private float Montant;



    public float getMontant() {
        return Montant;
    }

    public void setMontant(float montant) {
        Montant = montant;
    }

    public String getCategorie_paiement() {
        return categorie_paiement;
    }

    public void setCategorie_paiement(String categorie_paiement) {
        this.categorie_paiement = categorie_paiement;
    }
}
