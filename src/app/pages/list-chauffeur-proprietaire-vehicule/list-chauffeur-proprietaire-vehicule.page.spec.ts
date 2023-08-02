import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListChauffeurProprietaireVehiculePage } from './list-chauffeur-proprietaire-vehicule.page';

describe('ListChauffeurProprietaireVehiculePage', () => {
  let component: ListChauffeurProprietaireVehiculePage;
  let fixture: ComponentFixture<ListChauffeurProprietaireVehiculePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChauffeurProprietaireVehiculePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListChauffeurProprietaireVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
