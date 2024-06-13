const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. O que é Inteligência Artificial?",
        alternativas: [
            {
                texto: "a) Um campo da ciência da computação que busca criar sistemas capazes de realizar tarefas que requerem inteligência humana.",
                afirmacao: "1.Acertou"
            },
            {
                texto: "b) Um campo da computação que busca ajudar no avanço para as máquinas do tempo.",
                afirmacao: "1.Errou"
            }
        ]
    },
    {
        enunciado: "2. Qual é um exemplo comum de aplicação de Inteligência Artificial?",
        alternativas: [
            {
                texto: "a) Máquinas do Tempo.",
                afirmacao: "2.Errou"
            },
            {
                texto: "b)Assistentes virtuais como a Siri e a Alexa.",
                afirmacao: "2.Acertou"
            }
        ]
    },
    {
        enunciado: "3. Como a Inteligência Artificial pode ser treinada para reconhecer imagens?",
        alternativas: [
            {
                texto: "a) Através da leitura das cores das imagens. ",
                afirmacao: "3.Errou"
            },
            {
                texto: "b) Através de algoritmos de aprendizado profundo que processam grandes conjuntos de dados de imagens. ",
                afirmacao: "3.Acertou"
            }
        ]
    },
    {
        enunciado: "4. Quais são as preocupações éticas em relação à Inteligência Artificial?",
        alternativas: [
            {
                texto: "a) Viés nos algoritmos, privacidade dos dados e impacto no mercado de trabalho.",
                afirmacao: "4.Acertou"
            },
            {
                texto: "b) Controle mental das pessoas por meio de chips implantados e conspirações alienígenas.",
                afirmacao: "4.Errou"
            }
        ]
    },
    {
        enunciado: "5. Qual técnica de IA é usada para treinar modelos a partir de grandes conjuntos de dados rotulados?",
        alternativas: [
            {
                texto: "a) Aprendizado supervisionado: A técnica onde o modelo é treinado com dados de entrada e saídas conhecidas.",
                afirmacao: "5.Acertou"
            },
            {
                texto: "b) Aprendizado não supervisionado: A técnica onde o modelo é treinado sem rótulos de saída e identifica padrões nos dados de entrada.",
                afirmacao: "5.Errou"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Gabarito...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
