import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StopAdsPage } from './stop-ads.page';

describe('StopAdsPage', () => {
  let component: StopAdsPage;
  let fixture: ComponentFixture<StopAdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StopAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
