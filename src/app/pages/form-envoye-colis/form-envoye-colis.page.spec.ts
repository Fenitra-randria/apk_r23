import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormEnvoyeColisPage } from './form-envoye-colis.page';

describe('FormEnvoyeColisPage', () => {
  let component: FormEnvoyeColisPage;
  let fixture: ComponentFixture<FormEnvoyeColisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEnvoyeColisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormEnvoyeColisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
