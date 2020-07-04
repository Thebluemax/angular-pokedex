import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { PokebaseService } from '../../shared/services/pokebase.service';
import { SecondaryScreenService } from '../../shared/services/secondary-screen.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Berry } from '../../interfaces/Berry';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InfoDialogComponent } from '../../components/dialogs/info-dialog-component/info-dialog.component';
import { AddDirective } from '../../directives/add.directive';

@Component({
  selector: 'app-berry',
  templateUrl: './berry.component.html',
  styleUrls: ['./berry.component.scss']
})
export class BerryComponent implements OnInit {

  public title: string;
  public berry: Berry;
  public sprite: string;
  isLoading: boolean=false;

  private idObservable: Subscription;
  @ViewChild(AddDirective, {static: true}) modalEntry: AddDirective;

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
     private dialog: MatDialog,
     private factoryComponent: ComponentFactoryResolver
  ) {
    this.isLoading = true;
    router.events.forEach((event) => {
      if (event) {
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
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
      this.sScreen.setText(`#-${this.berry.id}`);
      this.isLoading = false;
      this.idObservable.unsubscribe();
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

  openModal( url:string ){

    const componentFactory = this.factoryComponent.resolveComponentFactory(InfoDialogComponent);

    //const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    ////dialogConfig.autoFocus = true;
    const viewContainer = this.modalEntry.viewContainerref;
    viewContainer.clear();
    const componentRef = viewContainer.createComponent(componentFactory);
 (<InfoDialogComponent>componentRef.instance).data = { url: url };
   /// dialogConfig.data = {
     ///   name: this.berry.name,
     //   url: url
   // };

   // this.dialog.open(InfoDialogComponent, dialogConfig);

  }

}
