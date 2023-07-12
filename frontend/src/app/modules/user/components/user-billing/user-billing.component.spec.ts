import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBillingComponent } from './user-billing.component';

describe('UserBillingComponent', () => {
  let component: UserBillingComponent;
  let fixture: ComponentFixture<UserBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBillingComponent]
    });
    fixture = TestBed.createComponent(UserBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
