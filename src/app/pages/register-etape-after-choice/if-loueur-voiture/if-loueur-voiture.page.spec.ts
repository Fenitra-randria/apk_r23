import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IfLoueurVoiturePage } from './if-loueur-voiture.page';

describe('IfLoueurVoiturePage', () => {
  let component: IfLoueurVoiturePage;
  let fixture: ComponentFixture<IfLoueurVoiturePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IfLoueurVoiturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IfLoueurVoiturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
