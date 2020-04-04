import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { FAQsComponent } from './screens/faqs/faqs.component';
import { AboutComponent } from './screens/about/about.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';
import { ContentComponent } from './screens/content/content.component';
import { ProfessorComponent } from './screens/professor/professor.component';
import { AlunoComponent } from './screens/aluno/aluno.component';
import { PaiComponent } from './screens/pai/pai.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'conteudo',component: ContentComponent, children:[
   
  ]
  },
  {path: 'professor/:id', component: ProfessorComponent},
  {path: 'aluno/:id', component: AlunoComponent},
  {path: 'pais/:id', component: PaiComponent},
  {path: 'faqs',component: FAQsComponent},
  {path: 'sobre',component: AboutComponent},
  {path: 'privacidade', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
