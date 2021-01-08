import {Entraineur } from '../Model/entraineur'
export class Equipe {
    id_equipe : number;
    niveau: string;
    age_inf: number;
    age_sup: number;
    nombre_joueurs: number;
    etat : string;
    trainer : Entraineur;

    constructor(){}

}
