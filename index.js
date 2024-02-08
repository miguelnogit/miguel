const perguntas = [
    {
      pergunta: "Qual é o principal objetivo da cartografia?",
      respostas: [
        "Representar graficamente o relevo terrestre",
        "Estudar os processos de formação dos mapas",
        "Representar e analisar a superfície terrestre em mapas",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um datum cartográfico?",
      respostas: [
        "Um conjunto de linhas de referência utilizado na projeção de mapas",
        "Uma medida de distância em mapas topográficos",
        "Um sistema de coordenadas utilizado na construção de mapas",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um mapa topográfico?",
      respostas: [
        "Um mapa que mostra apenas as características físicas do terreno",
        "Um mapa que exibe a distribuição populacional de uma região",
        "Um mapa que representa as características naturais e artificiais do terreno",
      ],
      correta: 2
    },
    {
      pergunta: "O que é a escala de um mapa?",
      respostas: [
        "A relação entre a distância no mapa e a distância real na superfície terrestre",
        "A medida da inclinação do terreno",
        "O número de cores utilizadas na representação do relevo",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um meridiano?",
      respostas: [
        "Uma linha imaginária que une os polos da Terra",
        "Uma linha que divide a Terra em Hemisfério Leste e Hemisfério Oeste",
        "Uma linha de referência utilizada na projeção de mapas",
      ],
      correta: 1
    },
    {
      pergunta: "O que é a interpolação cartográfica?",
      respostas: [
        "Uma técnica para criar mapas usando imagens de satélite",
        "Um método para extrair dados de um mapa impresso",
        "Um processo para estimar valores em locais onde não há medições diretas",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma carta náutica?",
      respostas: [
        "Um mapa utilizado para fins agrícolas",
        "Um mapa que representa a geologia de uma região",
        "Um mapa marítimo que mostra características importantes para a navegação",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma ortofotomapa?",
      respostas: [
        "Um tipo de mapa que mostra apenas estruturas religiosas",
        "Uma fotografia aérea corrigida geometricamente para remover distorções",
        "Um mapa que mostra apenas a distribuição de água em uma região",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um levantamento planialtimétrico?",
      respostas: [
        "Um levantamento que registra apenas dados altimétricos",
        "Um levantamento que registra dados planimétricos e altimétricos de uma área",
        "Um levantamento que registra apenas dados relativos às curvas de nível",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma curva de nível em um mapa topográfico?",
      respostas: [
        "Uma linha que indica a inclinação do terreno",
        "Uma linha que indica a direção do fluxo de água",
        "Uma linha que indica a densidade populacional",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totaldeperguntas = perguntas.length
  const mostrartotal = document.querySelector('#acertos span')
  mostrartotal.textContent = corretas.size + ' de ' + totaldeperguntas
  
  for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas){
    const dt = quizitem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estacorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estacorreta) {
        corretas.add(item)
      }
      
      mostrartotal.textContent = corretas.size + ' de ' + totaldeperguntas
    }
  
    quizitem.querySelector('dl').appendChild(dt)
  }
  
  quizitem.querySelector('dl dt').remove()
  quiz.appendChild(quizitem)
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*const miguel = {
    incrícel: "muito",
    foda: 'miguel é foda demais',
    alert (miguel.foda)  
  }
  const perguntas = [
    {
      pergunta: "pergunta 1",
      respostas: [
        "resposta A",
        "resposta B",
        "resposta C",
      ],
      correta: 2
    }, 
  ]
  alert(perguntas[0].respostas[perguntas[0].correta]) 
  
  */ 