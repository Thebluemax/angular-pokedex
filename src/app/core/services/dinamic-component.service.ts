import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
  } from '@angular/core';

  import { InfoDialogComponent } from '../../shared/components/dialogs/info-dialog-component/info-dialog.component'

  @Injectable()
  export class DinamicComponentService {
    factoryResolver;
    rootViewContainer;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {

      this.factoryResolver = factoryResolver
    }

    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }

    addDynamicComponent() {
      const factory = this.factoryResolver.resolveComponentFactory(InfoDialogComponent);
      const component = factory
        .create(this.rootViewContainer.parentInjector);
      this.rootViewContainer.insert(component.hostView);
    }}
