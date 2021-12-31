import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector, Inject } from '@angular/core';
import { PokebaseService } from '../../shared/services/pokebase.service';
import { SecondaryScreenService } from '../../shared/services/secondary-screen.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Berry } from '../../interfaces/Berry';
import { InfoDialogComponent } from '../dialogs/info-dialog-component/info-dialog.component';
import { DinamicComponentService } from '../../shared/services/dinamic-component.service';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.scss'],
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    }
  ]
})
export class BerryComponent implements OnInit {

  public title: string;
  public berry: Berry;
  public sprite: string;
  isLoading: boolean=false;

  service;
  view;

  private idObservable: Subscription;
  @ViewChild('appadd', {read: ViewContainerRef}) modalEntry;

  /**
   * Componente pokemon
   * @param route
   * @param router
   * @param pokeService
   * @param sScreen
   * @param _location
   */
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private pokeService: PokebaseService,
      private sScreen: SecondaryScreenService,
      private componetFActory: ComponentFactoryResolver
  ) {

  //  this.service = service;
   // this.view = viewContainerRef;

    this.isLoading = true;
    router.events.forEach((event) => {
      if (event) {
      }
      let id = this.route.snapshot.paramMap.get("id");

      this.init(id);
    });

  }
  /**
   * Método inicial
   */
  init(id: string) {
    this.isLoading = true;
    this.idObservable = this.pokeService.getDetallBerry(id).subscribe((data) => {
      this.berry = { ...data };
      this.sScreen.setText(`${this.berry.id}#-${this.berry.name}`);
      this.isLoading = false;
     // this.idObservable.unsubscribe();
    });

  }

  /**
   * On init
   */
  ngOnInit() {
    this.title = '/Berry/';
    this.berry = new Berry();

    let id = this.route.snapshot.paramMap.get("id");
    this.init(id);

  }
  /**
   * onDestroy
   */
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }


  openModal( typeName:string, url:string ){
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

}
