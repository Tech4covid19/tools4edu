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
      answer: "No Tools4Edu, os Professores encontram um guia com todos os passos para uma melhor interacçao com os Alunos, ideias de como recriar o melhor possível o ambiente humano existente na escola “física” e conselhos de como estimular a comunicaçao entre os próprios alunos num ambiente virtual. O objectivo é poder dar continuidade ao processo de ensino e, fundamentalmente, conseguir que as crianças tenham vontade de continuar a aprender e interagir a partir de casa."
    },
    {
      id: 3,
      question: "Sou Professor e gostava de dar uma aula online. O que fazer?",
      answer: "Para criar uma aula online, os Professores devem, em primeiro lugar criar uma conta na plataforma Zoom <a target='_blank' href='https://zoom.us/pt-pt/freesignup.html'>aqui</a>, introduzindo uma direcçao de email. A partir daí deve seguir as instruçoes de registo – receberá um e-mail para activar a sua conta. Deve activar para poder começar a utilizar o Zoom. Ao “activar” a conta, o Zoom pedirá dados adicionais para completar o registo (Nome, Apelido e uma Password). Pode continuar o processo sem convidar outros colegas. A partir deste momento, poderá começar a utilizar a conta Zoom para criar uma aula online. Deve clicar em “Ir à minha conta”."
    },
    {
      id: 4,
      question: "Consegui activar a minha conta no Zoom. Como criar uma nova aula?",
      answer: `
        Em primeiro lugar, deve aceder à sua conta do Zoom <a target='_blank' href='https://zoom.us/signin'>aqui</a>, introduzindo o e-mail e a password facilitados no momento de criaçao da conta. Entrará directamente no “Perfil”. Se já está dentro do Zoom porque acabou de efetuar o registo e nao saiu da plataforma, nao é necessário voltar a efetuar o Login. Deve, entao, seleccionar a opçao “Reunioes” 🡪 Programar uma nova Reuniao. Está a poucos passos de criar uma nova aula.
        Para programa a aula deve considerar os seguintes aspectos:
        <ul>
          <li>Tema 🡪 Nome da disciplina</li>
          <li>Descriçao 🡪 Tema a tratar na aula</li>
          <li>Data e Hora</li>
          <li>Duraçao 🡪 para beneficiar do Zoom totalmente gratis, cada aula deverá ter uma duraçao máxima de 40 minutos. Se pretende que a sua aula tenha uma duraçao superior, clice aqui (link para outra FAQ onde explique o que pode fazer)</li>
          <li>Gerar automaticamente ID da reunião</li>
          <li>Nao colocar password para reunião</li>
          <li>Video 🡪 activar para anfitriao e participantes</li>
          <li>Audio 🡪 apenas audio do computador</li>
          <li>Opçoes da reuniao 🡪 habilitar entrar antes do anfitrião</li>
        </ul>
        `
    },
    {
      id: 5,
      question: "A aula está programada. Como é que os Alunos podem assistir?",
      answer: `
        Quando a Aula está criada no Zoom, o Professor informa os Alunos por e-mail. 
        Deve seguir os seguintes passos: 
        <ul>
          <li>no “Perfil” Zoom, na seccçao Reunioes, pode visualizar as reunioes programadas. Seleccione a aula pretendida para ver todos os detalhes da mesma.</li>
          <li>aqui, encontrará um link para que os alunos se possam unir à aula. Seleccione este link, faça “copiar” (nao deve seleccionar a opçao “Copiar o Convite” mas apenas seleccionar o próprio link e com o botao direito do rato “copiar” o texto do link).</li>
          <li>
            Faça “colar” no corpo do e-mail que vai enviar aos alunos, indicando que para “vir à aula onlinel” devem clicar nesse mesmo link. Recomendamos que o e-mail tenha a seguinte estrutura:
            <ul>
              <li>Data e Hora da Aula</li>
              <li>Tema a tratar</li>
              <li>Link para “entrar na aula online”</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: 6,
      question: "Chegou o dia e a hora da minha Aula. Como dou início à aula online e como sei que os alunos “vieram à aula”?",
      answer: "Em primeiro lugar, deve aceder à sua conta do Zoom <a target='_blank' href='https://zoom.us/signin'>aqui</a>, introduzindo o e-mail e a password facilitados no momento de criaçao da conta. Entrará directamente no “Perfil”. Se já está dentro do Zoom porque acabou de efetuar o registo e nao saiu da plataforma, nao é necessário voltar a efetuar o Login. Deve, entao, seleccionar a opçao “Reunioes” 🡪 “Iniciar” (botao do lado direito) a Reuniao (Aula) pretendida. A Aula deveria começar automaticamente no seu navegador de internet. Se assim nao ocorrer, deve seguir as instruçoes da Zoom (“Abrir Reunioes Zoom” ou “Descarregar e Executar Zoom”). Sabe que a Aula se iniciou quando aparece a sua imagem no ecra com uma barra de ferramentas negra em baixo com diversas opçoes. A opçao “Participantes” permite identificar quantos Alunos já chegaram à aula online, se clicar em “Participantes” poderá identificar quem está presente. Neste momento, dentro da opçao “Participantes”, deve seleccionar em baixo do lado esquerdo o botao “Silenciar Todos”. Isto colocará em silêncio os microfones dos Alunos. Em qualquer momento, como Professor, poderá habilitar esta funçao, no botao “Activar Todos”. "
    },
    {
      id: 7,
      question: "Quanto tempo devo esperar até iniciar a Aula. Os Alunos podem entrar depois de eu começar a falar?",
      answer: "Recomendamos que dedique os primeiros 5 minutos de “cortesia” para dar tempo a que os Alunos possam entrar na aula e perceber o ambiente em que vao escutar o Professor e os Colegas. Verifique se os Alunos têm a opçao da Video habilitada (i.e. se aparecen no ecra). Assegure-se também de que o audio está a funcionar correctamente. No menu de “Participantes” seleccione “Activar Todos”. Depois, com o seu próprio microfone em aberto – em baixo do lado esquerda verá um microfone que deve estar activo,- poderá perguntar se o estao a ouvir e aguardar a resposta. Se ouvir a voz dos alunos, o audio está a funcionar. Pode voltar a “Silenciar Todos” no menu “Participantes” en quanto a aula nao começa. Passados os minutos de cortesia, pode iniciar a aula. Qualquer Aluno poderá entrar na aula durante o decorrer da mesma (sempre que um Aluno entrar, o Zoom emitirá um som e o número de “participantes” (em baixo) aumentará."
    },
    {
      id: 8,
      question: "Como é que os Alunos sabem que a Aula efetivamente começou?",
      answer: `
        <ul>
          <li>Com os microfones dos Alunos silenciados e o microfone do Professor aberto, o Professor deve dizer que “a aula vai começar” e explicar como a vai organizar. Conheça as ferramentas que tem à disposiçao no Zoom para replicar a aula presencial num ambiente virtual aqui (link para a FAQ sobre como partilhar ecra e organizar aula).</li>"
        </ul>
      `
    },
    {
      id: 9,
      question: "Se for a primeira aula online no Zoom, devo proceder de alguma forma especial para facilitar a adaptaçao dos Alunos?",
      answer: `A adaptação e aprendizagem a esta nova realidade vai demorar algum tempo. Neste sentido, para não criar frustração de não poderem acompanhar a aula, a primeira deverá apenas ser para trabalhar conteúdo "não letivo" e assim ganhar experiência na participação da aula. Recomendamos iniciar a Aula pela apresentação de cada participante, pedindo para realizar uma atividade divertida. Na secçao de participantes, pode habilitar o microfone de cada participante individualmente para este efeito. Quando um Aluno termina a sua intervençao, pode silencia-lo e habilitar o audio do seguinte (assim, sucessivamente, até todos intervirem). Desta forma, procuraremos aproximar as crianças num ambiente virtual descontraído, antes de introduzir qualquer conteúdo letivo.`
    },
    {
      id: 10,
      question: "Que ferramentas tenho no Zoom para dar uma aula online como se fosse presencial? Posso mostrar slides? E escrever no quadro?",
      answer: "Recorde que se vai dar inicio à aula online, será recomendável silenciar todos os alunos e explicar que poderao fazr perguntas. Deve ficar claro, tal como num aula presencial, que o Professor é responsável por coordenar todo o funcionamento da aula e que há regras de bom comportamento a cumpir (veja mais detalhes aqui) (link para FAQ de tirar dúvidas). Para mostrar aos Alunos slides ou outros materiais (imagens, sites na internet, etc) deve “Partilhar” o seu “Ecra”.  A partir desse momento os Alunos poderao ver qualquer conteúdo que o Professor tiver no seu própio ecra. A aula prossegue normalmente. Tem sempre opçao de “Parar” de Partilhar o ecra através da barra de ferramentas que estará activa enquanto partilha os conteúdos. Se desejar “escrever no quadro”, pode faze-lo, partilhando novamente na opçao de “Quadro Branco”. Os Alunos estarao a ver o ecra branco e poderá escrever como se fosse um quadro “normal” de sala de aula. Em qualquer momento, pode voltar a parar a partilha do quadro, regressar à partilha do seu próprio ecra ou simplesmente prosseguir a aula sem partilha. Recomendamos ir alternando as partilhas de ecra e perguntar periodicamente se estao a seguir o ritmo da aula. Relembre que para escutar os Alunos, os microfones devem ser habilitados na opçao “Participantes”. Em alternativa, se nao quiser habilitar o audio dos Alunos, pode incentivar a que escrevam via “Chat” (disponivel na barra de ferramentas em baixo)."
    },
    {
      id: 11,
      question: "Os Alunos podem fazer perguntas / tirar duvidas durante a Aula?",
      answer: `
        O Professor pode e deve perguntar com frequência e de forma direcionada (a um aluno em particular) se a mensagem está a passar. Para escutar o feedback do(s) aluno(s) recorde que os seus microfones têm que estar habilitados (pode fazer esta gestao do audio sempre na opçao “Participantes”). Pode também definir as regras para fazer questões. Tem duas alternativas em funçao do número de Alunos e da idade em causa:
        <ul>
          <li>os Alunos podem escrever as suas dúvidas no “chat” onde o Professor e Colegas vêem a pergunta, sendo que o Professor poderá decidir quando interromper a aula para responder</li>
          <li>os Alunos podem “levantar a mao” para falar, sendo que o Professor será notificado via seccçao de “Participantes”, decidindo quando deixar o Aluno em causa intervir ou se vários levantarem a mao, decidir a ordem em que intervêm.</li>
        </ul>
        O objectivo será sempre manter a organizaçao que tipicamente existe numa aula presencial e replicá-la num ambiente virtual com ferramentas digitais.
      `
    },
    {
      id: 12,
      question: "Como faço um Intervalo da Aula? Os Alunos podem ter hora de “recreio”?",
      answer: "O Professor poderá criar uma sessao de “intervalo”, criando uma outra reuniao seguindo exactamente os mesmos passos que necessita para criar uma aula. O nome da aula deverá ser “Intervalo” e haverá um link especial para o momento do intervalo (que deverá ser enviado no email remetido inicialmente aos alunos juntamento com o convite para a aula). Recorde que se a sua Aula tiver uma duraçao de mais de 40 minutos, pode criar tres aulas com tres links associados (primeira parte da aula, intervalo e segunda parte da aula). Durante o “Intervalo” os Alunos terao um momento de “recreio virtual” onde poderao falar com os colegas e desfrutar de um momento diferente de interaçao, em ambiente virtual. O “intervalo” deverá ser sempre monitorizado por um Professor para manter a ordem."
    },
    {
      id: 13,
      question: "Como termino uma Aula ? Ou um “Intervalo”?",
      answer: "Quando a Aula ou o Intervalo chega ao fim, pode terminar em baixo do lado direito clicando na opçao “Terminar Reuniao para Todos”. Se pretende iniciar uma nova Aula, volte ao menu de “Reunioes” da sua conta Zoom e clique em “Iniciar” a reuniao pretendida."
    },
    {
      id: 14,
      question: "Como crio uma reunião com Encarregado de Educação?",
      answer: "Deve seguir exactamente os mesmo passos recomendados para criar uma Aula online. Deve remeter o link da reuniao em Zoom por email ao Encarregado de Educaçao, identificando data e hora da mesma. Recorde habilitar video e audio para ambos para que possa estabelecer uma video chamada e assim replicar o mais possivel o que seria uma reuniao presencial."
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
