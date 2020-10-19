import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { LeadComponent } from './lead/lead.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';
import { ScrollToModule } from 'ng2-scroll-to-el';

const appRoutes: Routes = [
  { path: '', component: ResumeBuilderComponent },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  declarations: [AppComponent, ResumeBuilderComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent, ContactComponent, EducationComponent, LeadComponent, ExperienceComponent, SkillComponent],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), ScrollToModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
