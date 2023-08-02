import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IfProprietaireVehiculePage } from './if-proprietaire-vehicule.page';

describe('IfProprietaireVehiculePage', () => {
  let component: IfProprietaireVehiculePage;
  let fixture: ComponentFixture<IfProprietaireVehiculePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IfProprietaireVehiculePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IfProprietaireVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
