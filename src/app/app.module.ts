import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TimelineComponentComponent } from './timeline-component/timeline-component.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsComponentComponent } from './skills-component/skills-component.component';
import { FrameworkExperienceComponent } from './framework-experience/framework-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponentComponent,
    TimelineComponentComponent,
    SkillsComponent,
    SkillsComponentComponent,
    FrameworkExperienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
