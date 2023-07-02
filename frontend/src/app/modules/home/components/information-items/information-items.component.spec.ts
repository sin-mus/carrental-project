import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationItemsComponent } from './information-items.component';

describe('InformationItemsComponent', () => {
  let component: InformationItemsComponent;
  let fixture: ComponentFixture<InformationItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationItemsComponent]
    });
    fixture = TestBed.createComponent(InformationItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
