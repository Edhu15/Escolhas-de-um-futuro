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
                afirmacao: "Toda grande conquista começa quando você decide agir"
            },
            {
                texto: "Ter um sonho que inspire seus próximos passos.",
                afirmacao: "Todo grande futuro nasce de um sonho que vale a pena perseguir."
            }           
            
        ]
    },
    {
        enunciado: "Quando um desafio aparece, você...",
        alternativas: [
            {
                texto:"Enxerga uma oportunidade para crescer.",
                afirmacao:"Você transforma desafios em oportunidades de evolução."
            },
            {
                texto: "Procura um novo caminho para seguir em frente.",
                afirmacao:"Você acredita que sempre existe uma nova possibilidade."
            }
        ]
    },
    {
        enunciado: "O que mais impulsiona suas escolhas?",
        alternativas: [
            {
                texto:"Seus objetivos.",
                afirmacao:"Você constrói seu caminho com propósito e determinação."
            },
            {
                texto:"Seus valores.",
                afirmacao:"Você faz escolhas que refletem quem realmente é."
            }
            
        ]
    },
    {
        enunciado: "O sucesso, para você, acontece quando...",
        alternativas: [
            {
                texto:"Você aproveita as oportunidades.",
                afirmacao:"Você acredita que as oportunidades favorecem quem está disposto a agir."
            },
            {
                texto:"Você cria suas próprias oportunidades.",
                afirmacao:"Você sabe que o futuro também é criado pelas suas iniciativas."
            }
            
        ]
    },
    {
        enunciado: "O futuro é construído...",
        alternativas: [
            {
                texto:"Um passo de cada vez.",
                afirmacao:"Cada pequena ação aproxima você dos seus sonhos."
            },
            {
                texto:"Com coragem para mudar quando necessário.",
                afirmacao:"A mudança faz parte de quem escolhe evoluir."
            }
            
        ]
    },
    {
        enunciado: " Complete a frase: Meu futuro será...",
        alternativas: [
            {
                texto: "Resultado das minhas atitudes de hoje.",
                afirmacao:"Você é o protagonista da história que está escrevendo."
            },
            {
                texto: "Reflexo das escolhas que faço todos os dias.",
                afirmacao:"Cada escolha é uma oportunidade de criar o futuro que deseja."
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em um futuro não tão distante...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();