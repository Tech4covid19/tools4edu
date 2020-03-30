import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export const AppConfig = {
  studentsFaqs: [
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
  ],
  parentsFaqs: [
    {
      id: 1,
      question: "Em que consiste a Plataforma Tools4Edu?",
      answer: "O Tools4Edu é uma plataforma de apoio à Comunidade Educativa (Professores, Alunos e Pais/Encarregados de Educação) que pretende facilitar a compreensão e utilização de ferramentar digitais no processo de ensino, dado o enquadramento que se vive em Portugal derivado do contágio do novo coronavírus Covid 19."
    },
    {
      id: 2,
      question: "Como é que a plataforma Tools4Edu me pode ajudar como Encarregado de Educação?",
      answer: "No Tools4Edu, os seus filhos encontram um guia com todos os passos para uma melhor interação com o Professor, nesta fase de isolamento devido ao Covid19. Procuramos dar ideias aos Professores de como recriar o melhor possível o ambiente humano existente na escola “física” e conselhos de como estimular a comunicação entre os próprios alunos num ambiente virtual. O objetivo é poder dar continuidade ao processo de ensino e, fundamentalmente, conseguir que as crianças tenham vontade de continuar a aprender e interagir a partir de casa. Nesse sentido, pretendemos devolver alguma normalidade à vida das famílias, conseguir que as crianças tenham ligação ao mundo escolar a partir de casa e ajudar os Pais a gerir esta nova realidade exigente de tele trabalhar e ter os filhos em casa."
    },
    {
      id: 3,
      question: "O que posso fazer para ajudar o meu filho?",
      answer: `<p><span style="font-weight: 400;">Recomendamos que, pelo menos, na primeira aula siga todos os passos com ele. Pode ver todos os passos a seguir para que um Aluno assista a uma aula na se&ccedil;&atilde;o deste site dedicada a alunos.&nbsp;</span></p><p><span style="font-weight: 400;">&Eacute; muito importante ajudar as crian&ccedil;as porque ser&aacute; uma processo que requer adapta&ccedil;&atilde;o a um novo ambiente (virtual).&nbsp;</span></p><p><span style="font-weight: 400;">Fique atento ao e-mail do seu filho (ou ao seu caso receba as comunica&ccedil;&otilde;es da escola no seu pr&oacute;prio email). Os Professores v&atilde;o enviar por email os dados de acesso &agrave;s aulas online, explicar quando s&atilde;o e a que horas e como &eacute; que os Alunos podem assistir &agrave; aula.</span></p>`
    },
    {
      id: 4,
      question: "Há algum programa específico para o meu filho assistir a estas aulas?",
      answer: 'Sim. O Programa chama-se Zoom Meetings. Recomendamos que visite a área do Aluno nesta página, para conhecer os passos a seguir para entrar num Meeting do Zoom (isto é, numa aula criada pelo Professor).'
    },
    {
      id: 5,
      question: "Tenho que instalar o Zoom Meeting no computador?",
      answer: `<p><span style="font-weight: 400;">Em princ&iacute;pio, n&atilde;o tem que instalar o programa. Ao clicar no link de acesso &agrave; aula que o Professor envia por email, deveria poder entrar na aula diretamente atrav&eacute;s do seu navegador de internet (web browser).&nbsp;</span></p><p><span style="font-weight: 400;">Caso n&atilde;o funcione (por n&atilde;o ter vers&atilde;o do navegador compat&iacute;vel) o pr&oacute;prio Zoom d&aacute; instru&ccedil;&otilde;es para descarregar e iniciar o programa no computador. O Zoom Meetings &eacute; uma plataforma perfeitamente segura utilizada em todo o mundo para a realiza&ccedil;&atilde;o de aulas online e reuni&otilde;es &agrave; dist&acirc;ncia.</span></p>`
    },
    {
      id: 6,
      question: "Como sei que o meu filho assiste à aula inteira? Tem algum intervalo?",
      answer: `<p><span style="font-weight: 400;">Recomendamos que, pelo menos, na primeira aula esteja com o seu filho, veja como funciona o programa e siga com ele todos os passos descritos na secção deste site dedicada a alunos.&nbsp;</span></p><p><span style="font-weight: 400;">Pode ajud&aacute;-lo a perceber como utilizar as diversas op&ccedil;&otilde;es do programa Zoom (por exemplo, levantar a m&atilde;o, escrever no Chat).&nbsp;</span></p><p><span style="font-weight: 400;">Deve tamb&eacute;m transmitir ao seu filho que tal como na escola, durante uma aula no Zoom o professor &eacute; quem dita as regras, pelo que deve obedecer &agrave;s mesma e permanecer na aula at&eacute; ao final.&nbsp;</span></p><p><span style="font-weight: 400;">As aulas no zoom podem ter intervalo. Ser&aacute; algo que o professor deve transmitir no email que envia inicialmente. Para saber mais como funcionam os intervalos verifique tamb&eacute;m se&ccedil;&atilde;o deste site dedicada a alunos.&nbsp;</span></p><p><span style="font-weight: 400;">Caso, a meio da aula, a internet tiver alguma falha e o seu filho sair da aula sem querer, deve voltar a entrar atrav&eacute;s do link que o professor enviou no email.</span></p>`
    },
    {
      id: 7,
      question: "Quero marcar uma reunião com o Professor do meu filho. O que fazer?",
      answer: `Deve enviar um email ao Professor, solicitando que este marque uma reunião no Zoom para data e hora que for mais conveniente para ambos e lhe envie por email o link da reunião. Desta forma, no dia e hora marcados, só tem que se unir à reunião através do link recebido por email. Funciona exatamente da mesma forma que a aula, mas neste caso, a reunião terá apenas dois participantes (o Professor e o Encarregado de Educação).`
    },
    {
      id: 8,
      question: "Ainda nao percebi muito bem como é que se pode ter uma aula no Zoom. Como vai funcionar a aula online?",
      answer: "A aula online funcionará num registo similar a uma presencial. O Professor ditará as regras, será quem decide quando a aula começa e acaba. Conseguirá controlar através do Programa Zoom que os alunos façam silêncio ou possam participar. Poderá partilhar o seu ecrã para que os Alunos vejam todos os materiais necessários para a aprendizagem da matéria. Tem ainda à disposição a opção de escrever no ecrã. Nesse caso, os alunos verão uma quadro branco onde o Professor escreverá como se fosse o quadro da sala de aula. O Professor fará esforços para promover a participação de todos durante a aula e deixará um espaço para intervalo para que as crianças possam também interagir em modo recreio. Para mais informações sobre como o Professor poderá dar a aula no Zoom verifique a secção deste site dedicada aos professores."
    }
  ],
  teacherFaqs: [
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
  ]
};
