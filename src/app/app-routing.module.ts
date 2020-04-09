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
import { ContentItemResolver } from './resolvers/contentItem.resolver';
import { BlogComponent } from './screens/blog/blog.component';
import { BlogArticleResolver } from './resolvers/blog-article.resolver';
import { BlogArticleComponent } from './screens/blog-article/blog-article.component';
import { ContentArticleComponent } from './screens/content-article/content-article.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'conteudo',component: ContentComponent},
  {path: 'conteudo/:slug', component: ContentArticleComponent, resolve: { contentItem: ContentItemResolver }},
  {path: 'professor/:slug', component: ProfessorComponent, resolve:{ contentItem: ContentItemResolver}},
  {path: 'aluno/:slug', component: AlunoComponent, resolve:{ contentItem: ContentItemResolver}},
  {path: 'pais/:slug', component: PaiComponent, resolve:{ contentItem: ContentItemResolver}},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:slug', component: BlogArticleComponent, resolve: { blogArticle: BlogArticleResolver }},
  {path: 'faqs', component: FAQsComponent},
  {path: 'sobre', component: AboutComponent},
  {path: 'privacidade', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
