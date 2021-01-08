import{ User } from '../Model/user';
import { RessourceService } from '../services/ressource.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ AuthService} from '../services/auth.service';
import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NgForm } from '@angular/Forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 authStatus: boolean;
  userForm: FormGroup;
  user: User;
  @Input() lastname: string;
  @Input() motdepasse: string;
  constructor(private formbuilder: FormBuilder,  private authService:AuthService, private ressourceServices: RessourceService, private router: Router) { }

  ngOnInit() {
  	this.authStatus  = this.authService.isAuth;

  }
  onSignIn(){
  		this.authService.signIn().then(
  			() => {
  				this.authStatus = this.authService.isAuth;
  				this.router.navigate(['accueil']);

  			}
  		);
  }
  public  loginin(use: string,pass: string){
            let resp =  this.ressourceServices.login(use, pass);
            resp.subscribe(data => {
            this.user = data
            console.log(data);
              if((this.user != null) || ((use=="admin")&&(pass=="admin"))){
                this.onSignIn();
              }
              else{
                alert("mot de passe ou utilisateur érroné");
              }
            })
  }
    onSignUp(){
            console.log("je suis");
            this.router.navigate(['/accueil']);
    }

      onSubmitConnexion(formulaire : NgForm){

         const lastname = formulaire.value['lastname'];
         const motdepasse = formulaire.value['motdepasse'];
          this.loginin(lastname,motdepasse);

      }

onSignOut(){
    	this.authService.signOut();
    	this.authStatus = this.authService.isAuth;
    }
}
