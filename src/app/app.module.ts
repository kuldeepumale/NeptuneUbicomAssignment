import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/section/components/home/home.component';
import { AboutComponent } from 'src/section/components/about/about.component';
import { EducationComponent } from 'src/section/components/education/education.component';
import { LeadComponent } from 'src/section/components/lead/lead.component';
import { ExperienceComponent } from 'src/section/components/experience/experience.component';
import { HeaderComponent } from 'src/section/components/header/header.component';
import { ContactComponent } from 'src/section/components/contact/contact.component';
import { SkillComponent } from 'src/section/components/skill/skill.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,
    AboutComponent, ContactComponent, EducationComponent, LeadComponent, ExperienceComponent, SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
