const perguntas = [
    {
      pergunta: "",
      respostas: [
        "Seu desodorate preferido",
        "Chave de carro bluetooth",
        "Looney Tunes",
      ],
      correta: 0
    },
    {
      pergunta: "",
      respostas: [
        "Documentário",
        "Minecraft",
        "Colher de madeira (aquela da cozinha sabe)",
      ],
      correta: 1
    },
    {
      pergunta: "",
      respostas: [
        "Geodude (pokémon)",
        "Chave Allen",
        "Oxigênio",
      ],
      correta: 1
    },
    {
      pergunta: "",
      respostas: [
        "Gente grande 2",
        "Leis de Newton",
        "Garrafa d'água de plástico",
      ],
      correta: 0
    },
    {
      pergunta: "",
      respostas: [
        "Bloons 6 (jogo do macaquinho)",
        "Bateria recarregável",
        "Cidade inicial do jogo do pokémon",
      ],
      correta: 0
    },
    {
      pergunta: "",
      respostas: [
        "A lua (em qualquer fase)",
        "Bakugan",
        "Chegar perfeitamente mais cedo no destino (2~3 minutos adiantado)",
      ],
      correta: 2
    },
    {
      pergunta: "",
      respostas: [
        "Sistema métrico",
        "ICarly",
        "Cortador de unha",
      ],
      correta: 0
    },
    {
      pergunta: "",
      respostas: [
        "Discord",
        "Guitar hero",
        "Montanha coberta de gelo",
      ],
      correta: 1
    },
    {
      pergunta: "",
      respostas: [
        "Ilha do medo (filme)",
        "Relógios",
        "Fórmula de Bháskara",
      ],
      correta: 0
    },
    {
      pergunta: "",
      respostas: [
        "Chão",
        "Fanta uva",
        "Videos de pedras caindo de lugares altos",
      ],
      correta: 2
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