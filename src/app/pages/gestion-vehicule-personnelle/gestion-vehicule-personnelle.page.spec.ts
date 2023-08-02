import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionVehiculePersonnellePage } from './gestion-vehicule-personnelle.page';

describe('GestionVehiculePersonnellePage', () => {
  let component: GestionVehiculePersonnellePage;
  let fixture: ComponentFixture<GestionVehiculePersonnellePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionVehiculePersonnellePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionVehiculePersonnellePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
