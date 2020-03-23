import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-pai',
  templateUrl: './faqs-pai.component.html',
  styleUrls: ['./faqs-pai.component.scss']
})
export class FaqsPaiComponent implements OnInit {
  allQuestions = [
    {
      id: 1,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educaçao) que pretende facilitar a compreensao e utilizaçao de ferramentar digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavirus Covid 19."
    },
    {
      id: 2,
      question: "Como é que a plataforma Tools4Edu me pode ajudar como Encarregado de Educação?",
      answer: "No Tools4Edu, os seus filhos encontram um guia com todos os passos para uma melhor interacção com os Professor, nesta fase de isolamento devido ao Covid19. Procuramos dar ideias aos Professores de como recriar o melhor possível o ambiente humano existente na escola “física” e conselhos de como estimular a comunicação entre os próprios alunos num ambiente virtual. O objectivo é poder dar continuidade ao processo de ensino e, fundamentalmente, conseguir que as crianças tenham vontade de continuar a aprender e interagir a partir de casa. Nesse sentido, pretendemos devolver alguma normalidade à vida das familias, conseguir que as crianças tenham ligação ao mundo escolar a partir de casa e ajudar os Pais a gerir esta nova realidade exigente de tele trabalhar e ter os filhos em casa."
    },
    {
      id: 3,
      question: "O que posso fazer para ajudar o meu filho?",
      answer: "Recomendamos que, pelo menos, na primeira aula siga todos os passos com ele. Pode ver todos os passos a seguir para que um Aluno assista a uma aula aqui (link para a parte dos alunos). É muito importante ajudar as crianças porque será uma processo que requer adaptação a um novo ambiente (virtual). Fique atento ao e-mail do seu filho (ou ao seu caso receba as comunicações da escola no seu próprio email). Os Professores vao enviar por email os dados de acesso às aulas online, explicar quando são e a que horas e como é que os Alunos podem assistir à aula."
    },
    {
      id: 4,
      question: "Há algum programa específico para o meu filho assistir a estas aulas?",
      answer: "Sim. O Programa chama-se Zoom Meetings. Recomendamos clicar aqui (link para o sitio que explique como é que o aluno acede à aula) para conhecer os passos a seguir para entrar num Meeting do Zoom (isto é, numa aula criada pelo Professor)."
    },
    {
      id: 5,
      question: "Tenho que instalar o Zoom Meeting no computador?",
      answer: "Em princípio, nao tem que instalar o programa. Ao clicar no link de acesso à aula que o Professor envia por email, deveria poder entrar na aula directamente através do seu navegador de internet (web browser). Caso nao funcione (por nao ter versao do navegador compatível) o próprio Zoom dá instruçoes para descarregar e iniciar o programa no computador. o Zoom Meetings é uma plataforma perfeitamente segura utilizada em todo o mundo para a realizaçao de aulas online e reunioes à distância."
    },
    {
      id: 6,
      question: "Como sei que o meu filho assiste à aula inteira? Tem algum intervalo?",
      answer: "Recomendamos que, pelo menos, na primeira aula esteja com o seu filho, veja como funciona o programa e siga com ele todos os passos (saiba mais aqui (link para passos do aluno)). Pode ajudá-lo a perceber como utilizar as diversas opções do programa Zoom (por exemplo, levantar a mao, escrever no Chat). Deve também transmitir ao seu filho que tal como na escola, durante uma aula no Zoom o professor é quem dita as regras, pelo que deve obedecer às mesma e permanecer na aula até ao final. As aulas no zoom podem ter intervalo. Será algo que o professor deve transmitir no email que envia inicialmente. Para saber mais como funcionam os intervalos, clique aqui (link para faq de alunos sobre intervalos). Caso, a meio da aula, a internet tiver alguma falha e o seu filho sair da aula sem querer, deve voltar a entrar através do link que o professor enviou no email."
    },
    {
      id: 7,
      question: "Quero marcar uma reunião com o Professor do meu filho. O que fazer?",
      answer: `Deve enviar um email ao professor, solicitando que este marque uma reunião no Zoom para data e hora que for mais conveniente para ambos e lhe envie por email o link da reunião. Desta forma, no dia e hora marcados, só tem que se unir à reunião através do link recebido por email. Funciona exactamente da mesma forma que a aula, mas neste caso, a reunião terá apenas dois participantes (o professor e o encarregado de educação).`
    },
    {
      id: 8,
      question: "Ainda nao percebi muito bem como é que se pode ter uma aula no Zoom. Como vai funcionar a aula online?",
      answer: "A aula online funcionará num registo similar a uma presencial. O Professor ditará as regras, será quem decide quando a aula começa e acaba. Conseguirá controlar através do Programa Zoom que os alunos façam silêncio ou possam participar. Poderá partilhar o seu ecrã para que os Alunos vejam todos os materiais necessários para a aprendizagem da matéria. Tem ainda à disposição a opção de escrever no ecrã. Nesse caso, os alunos verão uma quadro branco onde o professor escreverá como se fosse o quadro da sala de aula. O Professor fará esforços para promover a participação de todos durante a aula e deixará um espaço para intervalo para que as crianças possam também interagir em modo recreio. Para mais informações sobre como o professor poderá dar a aula no Zoom, clique aqui (linkpara passos do professor)."
    }
  ];
  // first group of questions
  shownQuestions = this.allQuestions.slice(0, 3);
  showMore = false;
  whatsShowing = 3;

  constructor() { }

  ngOnInit() {
  }

  toggleShowMore() {
    if (this.showMore === true) {
      this.shownQuestions = this.allQuestions.slice(0, 3);
      this.whatsShowing = 3;
    } else {
      this.shownQuestions = this.allQuestions;
      this.whatsShowing = this.allQuestions.length;
    }

    this.showMore = !this.showMore;
  }
}
