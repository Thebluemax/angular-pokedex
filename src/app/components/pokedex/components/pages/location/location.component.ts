import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
