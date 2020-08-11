import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSectionComponent } from './research-section.component';

describe('ResearchSectionComponent', () => {
  let component: ResearchSectionComponent;
  let fixture: ComponentFixture<ResearchSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
