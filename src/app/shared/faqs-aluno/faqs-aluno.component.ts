import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-aluno',
  templateUrl: './faqs-aluno.component.html',
  styleUrls: ['./faqs-aluno.component.scss']
})
export class FaqsAlunoComponent implements OnInit {
  allQuestions = [
    {
      id: 1,
      question: "O que é o Tools4Edu?",
      answer: "O Tools4Edu é o sítio onde vais aprender como ter aulas com o teu professor e ver os teus colegas a partir da tua própria casa. Podes (e deves) pedir a ajuda dos teus Pais / Encarregados de Educação. Vais poder continuar a aprender, mesmo que não vás à escola e vais poder falar com os teus amigos através de um programa da internet que se chama Zoom."
    },
    {
      id: 2,
      question: "As aulas são todos os dias? Como é que vou saber quando tenho aulas?",
      answer: "Vais receber um email do teu Professor a dizer-te quando é a aula e esse email vai ter um link. Vais clicar nesse link e assim aceder via web browser (aquilo que chamamos internet) a uma aula que se chama Zoom Meeting."
    },
    {
      id: 3,
      question: "E se eu não conseguir sozinho? Quem me ajuda?",
      answer: `<p><span style="font-weight: 400;">Vais pedir aos teus pais para estarem ao teu lado para te ajudarem a fazer tudo certo se for poss&iacute;vel na primeira vez que tenhas uma aula marcada, est&aacute; bem?&nbsp;</span></p><p><span style="font-weight: 400;">Se tiveres algum problema a entrar na aula, os teus pais podem ajudar a seguir as instru&ccedil;&otilde;es do programa Zoom. Vais ver que depois de teres a primeira aula tudo fica mais f&aacute;cil e, com o tempo, vais ser um craque que consegue fazer isto sem ajuda!</span></p>`
    },
    {
      id: 4,
      question: "O que é isso do Zoom Meeting?",
      answer: "Zoom é como se chama o programa informático que o professor vai usar para dar a aula. Caso estejas a perguntar, meeting é reunião em português, mas como o programa foi criado por pessoas americanas está escrito em inglês."
    },
    {
      id: 5,
      question: "Como é que vou ter uma aula se estamos todos em casas diferentes?",
      answer: "Vais ter uma aula online. Isto quer dizer que tu e os teus amigos vão poder ver e ouvir o Professor, vais poder falar com os teus colegas e ouvir o que eles dizem, como se estivessem na vossa sala de aula. Para isto o teu computador precisa de ter câmera (web cam) e microfone (não te esqueças pede ajuda aos teus pais na primeira aula)."
    },
    {
      id: 6,
      question: "Posso falar? Mas se falarmos todos ao mesmo tempo, não vai ser uma confusão?",
      answer: "Podes falar, sim se tiveres microfone no teu computador. Mas lembra-te que na sala de aula quem dita as regras é o teu Professor, por isso na aula online vai ser igual. O Professor é que vai dizer quando começa a aula e então devem estar todos em silêncio. O Professor tem um botão no computador dele que desliga e liga o teu microfone (sim, é verdade!) e ele vai avisar quando cada um pode falar e quando se deve estar em silêncio."
    },
    {
      id: 7,
      question: "Se o Professor desligar o meu microfone e eu quiser falar, o que faço?",
      answer: `<p><span style="font-weight: 400;">&Eacute; f&aacute;cil. Na escola, quando queres falar levantas a m&atilde;o e esperas que o Professor te d&ecirc; autoriza&ccedil;&atilde;o para participares. No Zoom &eacute; igual. Poder&aacute;s "levantar a m&atilde;o" para falar (tem l&aacute; um bot&atilde;o com este nome) ou tamb&eacute;m podes escrever no Chat (uma caixinha onde se podem escrever mensagens que o Professor l&ecirc;).&nbsp;</span></p><p><span style="font-weight: 400;">Lembra-te que o Professor &eacute; que dita as regras. Podes pedir para falar mas tens que esperar pela tua vez.</span></p>`
    },
    {
      id: 8,
      question: "Como é que vou aprender a matéria da aula e estudar se não tenho os materiais?",
      answer: `<p><span style="font-weight: 400;">O Zoom &eacute; super fixe. Deixa que o Professor partilhe contigo todos os materiais que precisas. Isto quer dizer que no teu computador tu vais poder ver os seus slides, fichas, exerc&iacute;cios, como se estivesse a ser uma aula na tua escola.&nbsp;</span></p><p><span style="font-weight: 400;">Vais ver que o Professor at&eacute; pode escrever num quadro branco que vai aparecer no teu computador e&nbsp; tu tamb&eacute;m vais poder escrever e assim mostrar a mat&eacute;ria que te vai ensinar a cada aula.</span></p>`
    },
    {
      id: 9,
      question: "Na escola eu tenho intervalos para brincar no recreio. Aqui também vou ter?",
      answer: "O Professor dirá quando é o intervalo, para que possas descansar e falar com os teus amigos. No email que o professor te mandar a dizer quando vais ter a tua aula, vai-te explicar tudo. Não te esqueças de pedir ajuda aos teus pais quando tiveres a tua primeira aula no Zoom."
    },
    {
      id: 10,
      question: "Posso sair da aula quando eu quiser? Como sei que a aula acabou?",
      answer: "Não deverás deixar a aula até ao Professor dizer que a aula está terminada (como habitualmente!). Quando a aula acabar, o Professor terminará a aula online e poderás sair do programa.  Mas, lembra-te! Se na escola não sais da aula a meio e esperas pelo final, aqui deves fazer igual. Se no meio da aula, tiveres algum problemas com a internet, vais sair da aula sem querer. Se isso acontecer, só tens de voltar a clicar no link que o Professor enviou para entrares novamente na aula. Não vale sair a meio sem querer e não voltar a entrar!"
    },
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
