import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'education',component:EducationComponent},
  {path:'skills',component:SkillsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'certifications',component:CertificationsComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
