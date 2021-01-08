import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  title = 'gestion-club-sportif';
  ngOnInit(): void {


    }

  constructor() {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    }
    onAllumer() {
            console.log('On allume tout !');
        }

}
