import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkExperienceComponent } from './framework-experience.component';

describe('FrameworkExperienceComponent', () => {
  let component: FrameworkExperienceComponent;
  let fixture: ComponentFixture<FrameworkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
