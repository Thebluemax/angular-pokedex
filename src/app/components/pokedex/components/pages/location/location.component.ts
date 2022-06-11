import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokebaseService } from '../../../../../core/services/pokebase.service';
import { SecondaryScreenService } from '../../../services/secondary-screen.service';
import { Location as LocationRegion } from '../../../../../core/models/region';

@Component({
  selector: 'pkd-region-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  loading:boolean;
  title:string;

  @Input() location:LocationRegion;
  constructor() { }
    ngOnInit() {

    }
}
