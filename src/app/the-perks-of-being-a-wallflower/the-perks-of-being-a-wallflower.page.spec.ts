import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThePerksOfBeingAWallflowerPage } from './the-perks-of-being-a-wallflower.page';

describe('ThePerksOfBeingAWallflowerPage', () => {
  let component: ThePerksOfBeingAWallflowerPage;
  let fixture: ComponentFixture<ThePerksOfBeingAWallflowerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThePerksOfBeingAWallflowerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThePerksOfBeingAWallflowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
