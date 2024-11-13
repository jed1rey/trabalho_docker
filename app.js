// app.js
const express = require('express');
const app = express();
const PORT = 8099;

const frases = [
    "Você não passará!",
    "Um anel para todos governar.",
    "Coragem, Sam.",
    "Os hobbits são criaturas notáveis!",
    "Que a luz de Elbereth ilumine o seu caminho.",
    "Eu sou Gandalf, o Cinza!",
    "Até mesmo a menor pessoa pode mudar o curso do futuro.",
    "Há mais no que vemos do que o olho pode perceber.",
    "Não é a força, mas a vontade que determina o nosso destino.",
    "Fuja, ou morra!",
    "Sempre há esperança, mas você deve buscá-la.",
    "Aquele que não luta pelo futuro, deve lutar pelo presente.",
    "O verdadeiro corajoso é aquele que sente medo e, mesmo assim, segue em frente.",
    "Um sábio nunca fala tudo o que pensa, mas sempre pensa em tudo o que fala.",
    "Nem todos os que vagam estão perdidos.",
    "No final, não somos medidos por nossa força, mas por nossas escolhas.",
    "A esperança é como o fogo. Enquanto houver uma centelha, ele jamais morre.",
    "O mundo está mudando... posso senti-lo na água, no ar e na terra.",
    "Todo grande feito começa com a pequena ação.",
    "Nem mesmo o mais sábio pode prever todos os fins.",
    "A verdadeira sabedoria está em reconhecer que sempre há algo a aprender.",
    "Não devemos temer as trevas, mas sim não ter coragem de enfrentar o que está por vir.",
    "Lembre-se: até o menor dos gestos pode ter grande impacto no destino de todos.",
    "O tempo está sempre em movimento, mas cabe a nós decidir o que fazer com o tempo que nos é dado."
];


app.get('/frase', (req, res) => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    res.json({ frase });
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
