import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecomponentComponent } from './welcomecomponent.component';

describe('WelcomecomponentComponent', () => {
  let component: WelcomecomponentComponent;
  let fixture: ComponentFixture<WelcomecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
