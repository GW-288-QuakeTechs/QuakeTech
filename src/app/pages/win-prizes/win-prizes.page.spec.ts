import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WinPrizesPage } from './win-prizes.page';

describe('WinPrizesPage', () => {
  let component: WinPrizesPage;
  let fixture: ComponentFixture<WinPrizesPage>;

  beforeEach( async() => {
    fixture = TestBed.createComponent(WinPrizesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
