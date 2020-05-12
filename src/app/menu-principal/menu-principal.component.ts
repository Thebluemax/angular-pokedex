import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {
  optionsList: string[];
  constructor(private router: Router) {
    this.optionsList = ['Item', 'Region', 'Pokemon','Berry'];
  }

  ngOnInit() {
  }
  goto($event) {
    let position = parseInt($event.target.attributes['position'].value);
    let tag = this.optionsList[position].toLowerCase();
    //console.log($event.target.attributes['position'].value);
    this.router.navigate([tag]);
  }
}
