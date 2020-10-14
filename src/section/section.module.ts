import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { PersonalSectionComponent } from './components/personal-section/personal-section.component';
import { ProfessionalSectionComponent } from './components/professional-section/professional-section.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { LeadComponent } from './components/lead/lead.component';
import { SkillComponent } from './components/skill/skill.component';


@NgModule({
  declarations: [PersonalSectionComponent, ProfessionalSectionComponent, HomeComponent, AboutComponent, EducationComponent, ExperienceComponent, ContactComponent, HeaderComponent, LeadComponent, SkillComponent],
  imports: [
    CommonModule,
    FormsModule,
    SectionRoutingModule,
  ]
})
export class SectionModule { }
