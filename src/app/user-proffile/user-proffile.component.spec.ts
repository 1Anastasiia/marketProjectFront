import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProffileComponent } from './user-proffile.component';

describe('UserProffileComponent', () => {
  let component: UserProffileComponent;
  let fixture: ComponentFixture<UserProffileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProffileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProffileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
