import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Injector, Inject, Input } from '@angular/core';
import { PokebaseService } from '@core/services/pokebase.service';
import { SecondaryScreenService } from '../../core/services/secondary-screen.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Berry } from '@core/models/berry';
import { InfoDialogComponent } from '../dialogs/info-dialog-component/info-dialog.component';
import { DinamicComponentService } from '@core/services/dinamic-component.service';

@Component({
  selector: 'pkd-berry-detaill',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.scss'],
  providers: [

  ]
})
export class BerryComponent {

  public title:string = '';
  public sprite: string = '';

  service: any = null;
  view: any = null;

  private idObservable: Subscription = new Subscription();
  @Input() berry: Berry = new Berry();
  @ViewChild('appadd', {read: ViewContainerRef}) modalEntry: any;

  /**
   * Componente pokemon
   * @param route
   * @param router
   * @param pokeService
   * @param sScreen
   * @param _location
   */



  /*openModal( typeName:string, url:string ){
    const componentFactory = this.componetFActory.resolveComponentFactory(InfoDialogComponent);
      const componentRef = this.modalEntry.createComponent(componentFactory);
console.log(url, typeName);
 (<InfoDialogComponent>componentRef.instance).getInfo(url);
 (<InfoDialogComponent>componentRef.instance).setType(typeName);
 (<InfoDialogComponent>componentRef.instance).emitValue.subscribe(event => {
   if(!event){
     this.berry = new Berry();
     this.modalEntry.clear();
    }
 })
    //});
   /// dialogConfig.data = {
     ///   name: this.berry.name,
     //   url: url
   // };

   // this.dialog.open(InfoDialogComponent, dialogConfig);

  }
*/
openModal( value: any, url: string){

}
}
