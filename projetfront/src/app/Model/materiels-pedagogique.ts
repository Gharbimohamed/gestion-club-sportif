import { Inventaire} from '../Model/inventaire';

export class MaterielsPedagogique {

      id: number;
      date_ajout: Date;
      nom_materiel: string;
      quantite: number;
      type_materiel: string;
      inventaires: Inventaire
}
