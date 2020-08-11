import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardSectionComponent } from './award-section.component';

describe('AwardSectionComponent', () => {
  let component: AwardSectionComponent;
  let fixture: ComponentFixture<AwardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
