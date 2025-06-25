import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CategoryListComponent } from './category-list.component'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PokebaseService } from '@core/services/pokebase.service'
import { MockPokebaseService, MockSecondaryScreenService } from 'src/app/stubs/pk-service.stub'
import { provideMockStore } from '@ngrx/store/testing'
import { SecondaryScreenService } from '@core/services/secondary-screen.service'
import { FormatNamePipe } from '@shared/pipes/format-name.pipe'

describe('CategoryListComponent', () => {
  let component: CategoryListComponent
  let fixture: ComponentFixture<CategoryListComponent>
  let store
  const initialState = {
    screen: { message: 'test' },
    ui: { isLoading: false }
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryListComponent, FormatNamePipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get(): any { return { id: 'pikachu' } } } } }
        },
        {
          provide: PokebaseService, useClass: MockPokebaseService

        },
        {
          provide: SecondaryScreenService, useClass: MockSecondaryScreenService
        }]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
