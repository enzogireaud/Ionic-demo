import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {
  nom :string;
  age : number;
  email:string;
  hobby:hobby;
  constructor() { 
    this.nom = "Enzo"
    this.age = 25
    this.email = "enzogireauds@gmail.com"
    this.hobby = {
      hobbyUn:"Sport",
      hobbyDeux: "Programmation",
      hobbyTrois : "Cinéma"
    }
  }

  ngOnInit() { 
  }
  onClick() {
    alert(this.email)
  }

}
interface hobby {
  hobbyUn:string;
  hobbyDeux:string;
  hobbyTrois:string;
}