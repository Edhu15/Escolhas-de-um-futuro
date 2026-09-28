const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que representa o início de uma grande conquista?",
        alternativas: [
            {
                texto: "Ter coragem para dar o primeiro passo.",
                afirmacao: [ 
                    "Toda grande conquista começa quando você decide agir",
                    "O movimento de hoje constrói a estrada do seu amanhã.",
                    "Superar o medo do início é metade da vitória."
                ]
            },
            {
                texto: "Ter um sonho que inspire seus próximos passos.",
                afirmacao: [
                    "Todo grande futuro nasce de um sonho que vale a pena perseguir.",
                    "A imaginação é o mapa que guia suas maiores realizações.",
                    "Um propósito forte transforma intenções em destino."
                ]
            }           
            
        ]
    },
    {
        enunciado: "Quando um desafio aparece, você...",
        alternativas: [
            {
                texto:"Enxerga uma oportunidade para crescer.",
                afirmacao: [
                    "Você transforma desafios em oportunidades de evolução.",
                    "Cada obstáculo superado revela uma nova versão mais forte de você."
                ]
            },
            {
                texto: "Procura um novo caminho para seguir em frente.",
                afirmacao: [
                    "Você acredita que sempre existe uma nova possibilidade.",
                    "Sua flexibilidade permite contornar barreiras sem perder de vista o seu destino.",
                    "Mudar a rota faz parte do aprendizado para chegar mais longe."
                ]
            }
        ]
    },
    {
        enunciado: "O que mais impulsiona suas escolhas?",
        alternativas: [
            {
                texto:"Seus objetivos.",
                afirmacao: [
                    "Você constrói seu caminho com propósito e determinação.",
                    "Seu foco no alvo garante que você mantenha o ritmo mesmo em dias difíceis.",
                    "Metas claras são a bússola que orienta seus esforços diários."
                ]
            },
            {
                texto:"Seus valores.",
                afirmacao: [
                    "Você faz escolhas que refletem quem realmente é.",
                    "Sua integridade é o alicerce firme sobre o qual constrói suas conquistas.",
                    "Caminhar em sintonia com seus princípios é sua verdadeira definição de sucesso."
                    
                ]
            }
            
        ]
    },
    {
        enunciado: "O sucesso, para você, acontece quando...",
        alternativas: [
            {
                texto:"Você aproveita as oportunidades.",
                afirmacao: [
                    "Você acredita que as oportunidades favorecem quem está disposto a agir.",
                    "Sua atenção às chances do presente multiplica as portas que se abrem no futuro.",
                    "Estar preparado para o momento certo é o segredo de quem alcança o que deseja."
                ]
            },
            {
                texto:"Você cria suas próprias oportunidades.",
                afirmacao: [
                    "Você sabe que o futuro também é criado pelas suas iniciativas.",
                    "Em vez de esperar pelo momento perfeito, você faz as coisas acontecerem."
                ]
            }
            
        ]
    },
    {
        enunciado: "O futuro é construído...",
        alternativas: [
            {
                texto:"Um passo de cada vez.",
                afirmacao: [
                    "Cada pequena ação aproxima você dos seus sonhos.",
                    "A constante evolução diária traz resultados surpreendentes a longo prazo.",
                    "Você entende que a paciência e a consistência constroem obras duradouras."
                ]
            },
            {
                texto:"Com coragem para mudar quando necessário.",
                afirmacao: [
                    "A mudança faz parte de quem escolhe evoluir.",
                    "Sua capacidade de reinventar seus planos garante um crescimento sem limites.",
                    "Desapegar do que não funciona é o que abre espaço para o extraordinário."
                ]
            }
            
        ]
    },
    {
        enunciado: " Complete a frase: Meu futuro será...",
        alternativas: [
            {
                texto: "Resultado das minhas atitudes de hoje.",
                afirmacao: [
                    "Você é o protagonista da história que está escrevendo.", 
                    "Suas ações no presente garantem o legado que você quer deixar."
                ]
            },
            {
                texto: "Reflexo das escolhas que faço todos os dias.",
                afirmacao: [
                    "Cada escolha é uma oportunidade de criar o futuro que deseja.",
                    "Suas decisões diárias são os tijolos que constroem a vida dos seus sonhos.",
                    "A sabedoria em cada pequena decisão pavimenta um caminho seguro e promissor."
            ]
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatoria(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em um futuro não tão distante...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatoria (Lista){
    const posicao = Math.floor(Math.random()* Lista.length);
    return Lista[posicao];
}

mostraPergunta();