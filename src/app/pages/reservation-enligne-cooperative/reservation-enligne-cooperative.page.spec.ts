import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservationEnligneCooperativePage } from './reservation-enligne-cooperative.page';

describe('ReservationEnligneCooperativePage', () => {
  let component: ReservationEnligneCooperativePage;
  let fixture: ComponentFixture<ReservationEnligneCooperativePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationEnligneCooperativePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationEnligneCooperativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
