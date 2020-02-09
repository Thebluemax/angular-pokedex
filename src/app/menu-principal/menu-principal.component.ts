import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {
  optionsList:string[];
  constructor(private router:Router) { 
    this.optionsList = ['Items', 'Places', 'Pokemons'];
  }

  ngOnInit() {
  }
  goto(index:number) {
      this.router.navigate(['items']);
  }
}
