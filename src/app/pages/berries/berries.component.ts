import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { InfoDialogComponent } from '../../components/dialogs/info-dialog-component/info-dialog.component';
import { AddDirective } from '../../directives/add.directive';

@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.scss']
})
export class BerriesComponent implements OnInit {

  pageName: string = 'Berries';
  apiUrl: string = 'berry';

  

  constructor(private modalDialog: InfoDialogComponent ) { }

  ngOnInit() {
  }

  

}
