import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs-professor',
  templateUrl: './faqs-professor.component.html',
  styleUrls: ['./faqs-professor.component.scss']
})
export class FaqsProfessorComponent implements OnInit {
  allQuestions = [
    {
      id: 1,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentas digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 2,
      question: "Como é que a plataforma Tools4Edu me pode ajudar como Professor?",
      answer: "<p><span style='font-weight: 400;'>No Tools4Edu, os Professores encontram um guia com todos os passos para uma melhor intera&ccedil;&atilde;o com os Alunos, ideias de como recriar o melhor poss&iacute;vel o ambiente humano existente na escola &ldquo;f&iacute;sica&rdquo; e conselhos de como estimular a comunica&ccedil;&atilde;o entre os pr&oacute;prios alunos num ambiente virtual.&nbsp;</span></p><p><span style='font-weight: 400;'>O objetivo &eacute; poder dar continuidade ao processo de ensino e, fundamentalmente, conseguir que as crian&ccedil;as tenham vontade de continuar a aprender e interagir a partir de casa.</span></p><p><span style='font-weight: 400;'>&nbsp;</span></p>"
    },
    {
      id: 3,
      question: "Sou Professor e gostava de dar uma aula online. O que fazer?",
      answer: "<p><span style='font-weight: 400;'>Para criar uma aula online, os Professores devem, em primeiro lugar criar uma conta na plataforma Zoom</span><a href='https://zoom.us/pt-pt/freesignup.html'> <span style='font-weight: 400;'>aqui</span></a><span style='font-weight: 400;'>, introduzindo uma dire&ccedil;&atilde;o de email.&nbsp;</span></p><p><span style='font-weight: 400;'>A partir da&iacute; deve seguir as instru&ccedil;&otilde;es de registo &ndash; receber&aacute; um e-mail para ativar a sua conta. Deve ativar para poder come&ccedil;ar a utilizar o Zoom. Ao &ldquo;ativar&rdquo; a conta, o Zoom pedir&aacute; dados adicionais para completar o registo (Nome, Apelido e uma Password).&nbsp;</span></p><p><span style='font-weight: 400;'>Pode continuar o processo sem convidar outros colegas. A partir deste momento, poder&aacute; come&ccedil;ar a utilizar a conta Zoom para criar uma aula online. Deve clicar em &ldquo;Ir &agrave; minha conta&rdquo;.&nbsp;</span></p><p>&nbsp;</p>"
    },
    {
      id: 4,
      question: "Consegui ativar a minha conta no Zoom. Como criar uma nova aula?",
      answer: `<p><span style="font-weight: 400;">Em primeiro lugar, deve aceder &agrave; sua conta do Zoom</span><a href="https://zoom.us/signin"> <span style="font-weight: 400;">aqui</span></a><span style="font-weight: 400;">, introduzindo o e-mail e a password facilitados no momento de cria&ccedil;&atilde;o da conta. Entrar&aacute; diretamente no &ldquo;Perfil&rdquo;.&nbsp;</span></p><p><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">Se j&aacute; est&aacute; dentro do Zoom porque acabou de efetuar o registo e n&atilde;o saiu da plataforma, n&atilde;o &eacute; necess&aacute;rio voltar a efetuar o Login. Deve, ent&atilde;o, selecionar a op&ccedil;&atilde;o &ldquo;Reuni&otilde;es&rdquo; 🡪 Programar uma nova Reuni&atilde;o.&nbsp;</span></p><p><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">Est&aacute; a poucos passos de criar uma nova aula.&nbsp;</span></p><p><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">Para programar a aula deve considerar os seguintes aspetos:</span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Tema 🡪 Nome da disciplina</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Descri&ccedil;&atilde;o 🡪 Tema a tratar na aula</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Data e Hora</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Dura&ccedil;&atilde;o 🡪 para beneficiar do Zoom totalmente gr&aacute;tis, cada aula dever&aacute; ter uma dura&ccedil;&atilde;o m&aacute;xima de 40 minutos. </span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Gerar automaticamente ID da reuni&atilde;o</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">N&atilde;o colocar password para reuni&atilde;o</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">V&iacute;deo -&gt; ativar para anfitri&atilde;o e participantes</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">&Aacute;udio -&gt; apenas &aacute;udio do computador</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Op&ccedil;&otilde;es da reuni&atilde;o -&gt; habilitar entrar antes do anfitri&atilde;o</span></li>
      `
    },
    {
      id: 5,
      question: `A aula est&aacute; programada. Como &eacute; que os Alunos podem assistir?`,
      answer: `<p><span style="font-weight: 400;">Quando a Aula est&aacute; criada no Zoom, o Professor informa os Alunos por e-mail.&nbsp;</span></p><p><span style="font-weight: 400;">Deve seguir os seguintes passos:&nbsp;</span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">no &ldquo;Perfil&rdquo; Zoom, na sec&ccedil;&atilde;o Reuni&otilde;es, pode visualizar as reuni&otilde;es programadas. Selecione a aula pretendida para ver todos os detalhes da mesma.&nbsp;&nbsp;</span></li></ul><ul><li style="font-weight: 400;"><span style="font-weight: 400;">aqui, encontrar&aacute; um link para que os alunos se possam unir &agrave; aula. Selecione este link, fa&ccedil;a &ldquo;copiar&rdquo; (n&atilde;o deve selecionar a op&ccedil;&atilde;o &ldquo;Copiar o Convite&rdquo; mas apenas selecionar o pr&oacute;prio link e com o bot&atilde;o direito do rato &ldquo;copiar&rdquo; o texto do link).&nbsp;&nbsp;</span></li></ul><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Fa&ccedil;a &ldquo;colar&rdquo; no corpo do e-mail que vai enviar aos alunos, indicando que para &ldquo;vir &agrave; aula online&rdquo; devem clicar nesse mesmo link. Recomendamos que o e-mail tenha a seguinte estrutura:</span></li></ul><ul><li style="font-weight: 400;"><span style="font-weight: 400;">Data e Hora da Aula</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Tema a tratar</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">Link para &ldquo;entrar na aula online&rdquo;</span></li></ul>`
    },
    {
      id: 6,
      question: `Chegou o dia e a hora da minha Aula. Como dou in&iacute;cio &agrave; aula online e como sei que os alunos &ldquo;vieram &agrave; aula&rdquo;?`,
      answer: `<p><span style="font-weight: 400;">Em primeiro lugar, deve aceder &agrave; sua conta do Zoom</span><a href="https://zoom.us/signin"> <span style="font-weight: 400;">aqui</span></a><span style="font-weight: 400;">, introduzindo o e-mail e a password facilitados no momento de cria&ccedil;&atilde;o da conta. Entrar&aacute; diretamente no &ldquo;Perfil&rdquo;.&nbsp;</span></p><p><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">Se j&aacute; est&aacute; dentro do Zoom porque acabou de efetuar o registo e n&atilde;o saiu da plataforma, n&atilde;o &eacute; necess&aacute;rio voltar a efetuar o Login.&nbsp;</span></p><p><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">Deve, ent&atilde;o, selecionar a op&ccedil;&atilde;o &ldquo;Reuni&otilde;es&rdquo; 🡪 &ldquo;Iniciar&rdquo; (bot&atilde;o do lado direito) a Reuni&atilde;o (Aula) pretendida. A Aula deveria come&ccedil;ar automaticamente no seu navegador de internet. Se assim n&atilde;o ocorrer, deve seguir as instru&ccedil;&otilde;es da Zoom (&ldquo;Abrir Reuni&otilde;es Zoom&rdquo; ou &ldquo;Descarregar e Executar Zoom&rdquo;).&nbsp;</span></p><p>&nbsp;</p><p><span style="font-weight: 400;">Sabe que a Aula se iniciou quando aparece a sua imagem no ecr&atilde; com uma barra de ferramentas negra em baixo com diversas op&ccedil;&otilde;es.&nbsp;</span></p><p><span style="font-weight: 400;">&nbsp;</span></p><p><span style="font-weight: 400;">A op&ccedil;&atilde;o &ldquo;Participantes&rdquo; permite identificar quantos Alunos j&aacute; chegaram &agrave; aula online, se clicar em &ldquo;Participantes&rdquo; poder&aacute; identificar quem est&aacute; presente. Neste momento, dentro da op&ccedil;&atilde;o &ldquo;Participantes&rdquo;, deve selecionar em baixo do lado esquerdo o bot&atilde;o &ldquo;Silenciar Todos&rdquo;. Isto colocar&aacute; em sil&ecirc;ncio os microfones dos Alunos.&nbsp;</span></p><p>&nbsp;</p><p><span style="font-weight: 400;">Em qualquer momento, como Professor, poder&aacute; habilitar esta fun&ccedil;&atilde;o, no bot&atilde;o &ldquo;Ativar Todos&rdquo;. </span></p>`
    },
    {
      id: 7,
      question: "Quanto tempo devo esperar até iniciar a Aula. Os Alunos podem entrar depois de eu começar a falar?",
      answer: `<p><span style="font-weight: 400;">Recomendamos que dedique os primeiros 5 minutos de &ldquo;cortesia&rdquo; para dar tempo a que os Alunos possam entrar na aula e perceber o ambiente em que v&atilde;o escutar o Professor e os Colegas.&nbsp;</span></p><p><span style="font-weight: 400;">Verifique se os Alunos t&ecirc;m a op&ccedil;&atilde;o de V&iacute;deo habilitada (i.e. se aparecem no ecr&atilde;). Assegure-se tamb&eacute;m de que o &aacute;udio est&aacute; a funcionar corretamente.&nbsp;</span></p><p><span style="font-weight: 400;">No menu de &ldquo;Participantes&rdquo; selecione &ldquo;Ativar Todos&rdquo;. Depois, com o seu pr&oacute;prio microfone em aberto &ndash; em baixo do lado esquerdo ver&aacute; um microfone que deve estar ativo,- poder&aacute; perguntar se o est&atilde;o a ouvir e aguardar a resposta. Se ouvir a voz dos alunos, o &aacute;udio est&aacute; a funcionar.&nbsp;</span></p><p><span style="font-weight: 400;">Pode voltar a &ldquo;Silenciar Todos&rdquo; no menu &ldquo;Participantes&rdquo; enquanto a aula n&atilde;o come&ccedil;a. Passados os minutos de cortesia, pode iniciar a aula. Qualquer Aluno poder&aacute; entrar na aula durante o decorrer da mesma (sempre que um Aluno entrar, o Zoom emitir&aacute; um som e o n&uacute;mero de &ldquo;participantes&rdquo; (em baixo) aumentar&aacute;.</span></p>`
    },
    {
      id: 8,
      question: "Como é que os Alunos sabem que a Aula efetivamente começou?",
      answer: `
      <p><span style="font-weight: 400;">Com os microfones dos Alunos silenciados e o microfone do Professor aberto, o Professor deve dizer que &ldquo;a aula vai come&ccedil;ar&rdquo; e explicar como a vai organizar.&nbsp;</span></p>
      <p><span style="font-weight: 400;">Conhe&ccedil;a as ferramentas que tem &agrave; disposi&ccedil;&atilde;o no Zoom para replicar a aula presencial num ambiente virtual (Ex: como partilhar ecr&atilde; e organizar aula).</span></p>
      `
    },
    {
      id: 9,
      question: "Se for a primeira aula online no Zoom, devo proceder de alguma forma especial para facilitar a adaptaçao dos Alunos?",
      answer: `<p><span style="font-weight: 400;">A adapta&ccedil;&atilde;o e aprendizagem a esta nova realidade vai demorar algum tempo. Neste sentido, para n&atilde;o criar frustra&ccedil;&atilde;o de n&atilde;o poderem acompanhar a aula, a primeira dever&aacute; apenas ser para trabalhar conte&uacute;do "n&atilde;o letivo" e assim ganhar experi&ecirc;ncia na participa&ccedil;&atilde;o da aula.&nbsp;</span></p><p><span style="font-weight: 400;">Recomendamos iniciar a Aula pela apresenta&ccedil;&atilde;o de cada participante, pedindo para realizar uma atividade divertida. Na sec&ccedil;&atilde;o de participantes, pode habilitar o microfone de cada participante individualmente para este efeito.&nbsp;</span></p><p><span style="font-weight: 400;">Quando um Aluno termina a sua interven&ccedil;&atilde;o, pode silenci&aacute;-lo e habilitar o &aacute;udio do seguinte (assim, sucessivamente, at&eacute; todos intervirem). Desta forma, procuraremos aproximar as crian&ccedil;as num ambiente virtual descontra&iacute;do, antes de introduzir qualquer conte&uacute;do letivo.</span></p>`
    },
    {
      id: 10,
      question: "Que ferramentas tenho no Zoom para dar uma aula online como se fosse presencial? Posso mostrar slides? E escrever no quadro?",
      answer: `<p><span style="font-weight: 400;">Recorde que se vai dar in&iacute;cio &agrave; aula online, ser&aacute; recomend&aacute;vel silenciar todos os alunos e explicar que poder&atilde;o fazer perguntas.&nbsp;</span></p><p><span style="font-weight: 400;">Deve ficar claro, tal como numa aula presencial, que o Professor &eacute; respons&aacute;vel por coordenar todo o funcionamento da aula e que h&aacute; regras de bom comportamento a cumprir (Ex: como tirar d&uacute;vidas).&nbsp;</span></p><p><span style="font-weight: 400;">Para mostrar aos Alunos slides ou outros materiais (imagens, sites na internet, etc.) deve &ldquo;Partilhar&rdquo; o seu &ldquo;Ecr&atilde;&rdquo;.&nbsp; A partir desse momento os Alunos poder&atilde;o ver qualquer conte&uacute;do que o Professor tiver no seu pr&oacute;prio ecr&atilde;. A aula prossegue normalmente.&nbsp;</span></p><p><span style="font-weight: 400;">Tem sempre op&ccedil;&atilde;o de &ldquo;Parar&rdquo; de Partilhar o ecr&atilde; atrav&eacute;s da barra de ferramentas que estar&aacute; ativa enquanto partilha os conte&uacute;dos. Se desejar &ldquo;escrever no quadro&rdquo;, pode faz&ecirc;-lo, partilhando novamente na op&ccedil;&atilde;o de &ldquo;Quadro Branco&rdquo;.&nbsp;</span></p><p><span style="font-weight: 400;">Os Alunos estar&atilde;o a ver o ecr&atilde; branco e poder&aacute; escrever como se fosse um quadro &ldquo;normal&rdquo; de sala de aula. Em qualquer momento, pode voltar a parar a partilha do quadro, regressar &agrave; partilha do seu pr&oacute;prio ecr&atilde; ou simplesmente prosseguir a aula sem partilha.&nbsp;</span></p><p><span style="font-weight: 400;">Recomendamos ir alternando as partilhas de ecr&atilde; e perguntar periodicamente se est&atilde;o a seguir o ritmo da aula. Relembre que para escutar os Alunos, os microfones devem ser habilitados na op&ccedil;&atilde;o &ldquo;Participantes&rdquo;. Em alternativa, se n&atilde;o quiser habilitar o &aacute;udio dos Alunos, pode incentivar a que escrevam via &ldquo;Chat&rdquo; (dispon&iacute;vel na barra de ferramentas em baixo).</span></p>`
    },
    {
      id: 11,
      question: "Os Alunos podem fazer perguntas / tirar dúvidas durante a Aula?",
      answer: `
      <p><span style="font-weight: 400;">O Professor pode e deve perguntar com frequ&ecirc;ncia e de forma direcionada (a um aluno em particular) se a sua mensagem est&aacute; a ser entendida.&nbsp;</span></p><p><span style="font-weight: 400;">Para escutar o feedback do(s) aluno(s) recorde que os seus microfones t&ecirc;m que estar habilitados (pode fazer esta gest&atilde;o do &aacute;udio sempre na op&ccedil;&atilde;o &ldquo;Participantes&rdquo;).&nbsp;</span></p><p><span style="font-weight: 400;">Pode tamb&eacute;m definir as regras para fazer quest&otilde;es. Tem </span><span style="font-weight: 400;">duas</span><span style="font-weight: 400;"> alternativas em fun&ccedil;&atilde;o do n&uacute;mero de Alunos e da idade em causa:</span></p><ul><li style="font-weight: 400;"><span style="font-weight: 400;">os Alunos podem escrever as suas d&uacute;vidas no &ldquo;chat&rdquo; onde o Professor e Colegas veem a pergunta, sendo que o Professor poder&aacute; decidir quando interromper a aula para responder;</span></li><li style="font-weight: 400;"><span style="font-weight: 400;">os Alunos podem &ldquo;levantar a m&atilde;o&rdquo; para falar, sendo que o Professor ser&aacute; notificado via sec&ccedil;&atilde;o de &ldquo;Participantes&rdquo;, decidindo quando deixar o Aluno em causa intervir ou se v&aacute;rios levantaram a m&atilde;o, decidir a ordem em que interv&ecirc;m.</span></li></ul><p><span style="font-weight: 400;">&nbsp;objetivo ser&aacute; sempre manter a organiza&ccedil;&atilde;o que tipicamente existe numa aula presencial e replic&aacute;-la num ambiente virtual com ferramentas digitais.</span></p>
      `
    },
    {
      id: 12,
      question: "Como faço um Intervalo da Aula? Os Alunos podem ter hora de “recreio”?",
      answer: `<p><span style="font-weight: 400;">O Professor poder&aacute; criar uma sess&atilde;o de &ldquo;intervalo&rdquo;, criando uma outra reuni&atilde;o seguindo exatamente os mesmos passos que necessita para criar uma aula.&nbsp;</span></p><p><span style="font-weight: 400;">O nome da aula dever&aacute; ser &ldquo;Intervalo&rdquo; e haver&aacute; um link especial para o momento do intervalo (que dever&aacute; ser enviado no email remetido inicialmente aos alunos juntamente com o convite para a aula).&nbsp;</span></p><p><span style="font-weight: 400;">Recorde que se a sua Aula tiver uma dura&ccedil;&atilde;o de mais de 40 minutos, pode criar tr&ecirc;s aulas com tr&ecirc;s links associados (primeira parte da aula, intervalo e segunda parte da aula).&nbsp;</span></p><p><span style="font-weight: 400;">Durante o &ldquo;Intervalo&rdquo; os Alunos ter&atilde;o um momento de &ldquo;recreio virtual&rdquo; onde poder&atilde;o falar com os colegas e desfrutar de um momento diferente de intera&ccedil;&atilde;o, em ambiente virtual.&nbsp;</span></p><p><span style="font-weight: 400;">O &ldquo;intervalo&rdquo; dever&aacute; ser sempre monitorizado por um Professor para manter a ordem.</span></p>`
    },
    {
      id: 13,
      question: "Como termino uma Aula ? Ou um “Intervalo”?",
      answer: `<p><span style="font-weight: 400;">Quando a Aula ou o Intervalo acaba, pode terminar em baixo do lado direito da janela clicando na op&ccedil;&atilde;o &ldquo;Terminar Reuni&atilde;o para Todos&rdquo;.&nbsp;</span></p><p><span style="font-weight: 400;">Se pretende iniciar uma nova Aula, volte ao menu de &ldquo;Reuni&otilde;es&rdquo; da sua conta Zoom e clique em &ldquo;Iniciar&rdquo; a reuni&atilde;o pretendida.</span></p>`
    },
    {
      id: 14,
      question: "Como crio uma reunião com Encarregado de Educação?",
      answer: `<p><span style="font-weight: 400;">Deve seguir exatamente os mesmo passos recomendados para criar uma Aula online.&nbsp;</span></p><p><span style="font-weight: 400;">Deve remeter o link da reuni&atilde;o em Zoom por email ao Encarregado de Educa&ccedil;&atilde;o, identificando data e hora da mesma.&nbsp;</span></p><p><span style="font-weight: 400;">Recorde habilitar v&iacute;deo e &aacute;udio para ambos para que possa estabelecer uma videochamada e assim replicar o mais poss&iacute;vel o que seria uma reuni&atilde;o presencial.</span></p>`
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
