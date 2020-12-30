package IRHD.ServiceDepenses.models;


public class Achats extends Depenses{

    private int NombreAchats;
    private String TypeAchats;

    public int getNombreAchats() {
        return NombreAchats;
    }

    public void setNombreAchats(int nombreAchats) {
        NombreAchats = nombreAchats;
    }

    public String getTypeAchats() {
        return TypeAchats;
    }

    public void setTypeAchats(String typeAchats) {
        TypeAchats = typeAchats;
    }
}
