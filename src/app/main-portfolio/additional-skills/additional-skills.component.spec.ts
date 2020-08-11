import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalSkillsComponent } from './additional-skills.component';

describe('AdditionalSkillsComponent', () => {
  let component: AdditionalSkillsComponent;
  let fixture: ComponentFixture<AdditionalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
