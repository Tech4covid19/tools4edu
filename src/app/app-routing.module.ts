import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProfessorComponent } from './screens/professor/professor.component';
import { AlunoComponent } from './screens/aluno/aluno.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'professor',component: ProfessorComponent},
  {path: 'aluno',component: AlunoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
