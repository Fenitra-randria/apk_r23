import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuGestionVehiculePage } from './menu-gestion-vehicule.page';

describe('MenuGestionVehiculePage', () => {
  let component: MenuGestionVehiculePage;
  let fixture: ComponentFixture<MenuGestionVehiculePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGestionVehiculePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuGestionVehiculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
