import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservaTurnoPage } from './reserva-turno.page';

describe('ReservaTurnoPage', () => {
  let component: ReservaTurnoPage;
  let fixture: ComponentFixture<ReservaTurnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaTurnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaTurnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
