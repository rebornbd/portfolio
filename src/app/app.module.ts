import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { HeaderComponent } from './main-portfolio/header/header.component';
import { AboutMeComponent } from './main-portfolio/about-me/about-me.component';
import { ExperienceSectionComponent } from './main-portfolio/experience-section/experience-section.component';
import { SkillsSectionComponent } from './main-portfolio/skills-section/skills-section.component';
import { EducationSectionComponent } from './main-portfolio/education-section/education-section.component';
import { InterestsSectionComponent } from './main-portfolio/interests-section/interests-section.component';
import { LanguageSectionComponent } from './main-portfolio/language-section/language-section.component';
import { AwardSectionComponent } from './main-portfolio/award-section/award-section.component';
import { FooterComponent } from './main-portfolio/footer/footer.component';
import { ProjectsSectionComponent } from './main-portfolio/projects-section/projects-section.component';
import { ResearchSectionComponent } from './main-portfolio/research-section/research-section.component';
import { PersonalInfoComponent } from './main-portfolio/personal-info/personal-info.component';
import { AdditionalSkillsComponent } from './main-portfolio/additional-skills/additional-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPortfolioComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienceSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    InterestsSectionComponent,
    LanguageSectionComponent,
    AwardSectionComponent,
    FooterComponent,
    ProjectsSectionComponent,
    ResearchSectionComponent,
    PersonalInfoComponent,
    AdditionalSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
