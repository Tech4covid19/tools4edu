import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-aluno',
  templateUrl: './faqs-aluno.component.html',
  styleUrls: ['./faqs-aluno.component.scss']
})
export class FaqsAlunoComponent implements OnInit {
  whatsShowing = 3;
  showMore = false;
  allQuestions = [
    {
      id: 1,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 2,
      question: "Como é que a plataforma Tools4Edu me pode ajudar como Professor?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 3,
      question: "Sou Professor e gostava de dar uma aula online. O que fazer?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 4,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 5,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 6,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
  ];

  // first group of questions
  shownQuestions = this.allQuestions.slice(0, 3);

  constructor() { }

  ngOnInit() {
  }

  toggleShowMore() {
    if (this.showMore === true) {
      this.shownQuestions = this.allQuestions.slice(0, 3);
    } else {
      this.shownQuestions = this.allQuestions;
    }

    this.showMore = !this.showMore;
  }
}
