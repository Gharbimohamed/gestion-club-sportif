package IRHD.GestionDesUtilisateurs.models;


import javax.persistence.*;

@Entity
@Table(name = "Roles", schema = "gestion")
public class Roles {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id_role;
    private String role;

    public int getId_role() {
        return id_role;
    }

    public void setId_role(int id_role) {
        this.id_role = id_role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
