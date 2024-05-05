const quiz_map = new Map([
    [0, {
        question: "Qual é uma fonte de energia renovável?",
        image: "",
        correct: "Solar",
        wrong_1: "Carvão",
        wrong_2: "Petróleo",
        wrong_3: "Gás natural",
        wrong_4: "Nuclear"
    }],
    [1, {
        question: "Qual é uma forma de energia limpa para transporte?",
        image: "",
        correct: "Bicicleta elétrica",
        wrong_1: "Diesel",
        wrong_2: "Gasolina",
        wrong_3: "Avião a jato",
        wrong_4: "Caminhão a diesel"
    }],
    [2, {
        question: "Qual é uma vantagem da energia eólica?",
        image: "",
        correct: "Renova-se naturalmente",
        wrong_1: "Libera gases poluentes",
        wrong_2: "É cara de produzir",
        wrong_3: "Depende de combustíveis fósseis",
        wrong_4: "Requer muita água para operar"
    }],
    [3, {
        question: "O que é uma característica da energia solar fotovoltaica?",
        image: "",
        correct: "Utiliza células solares para gerar eletricidade",
        wrong_1: "Produz resíduos tóxicos",
        wrong_2: "Depende de nuvens para funcionar",
        wrong_3: "É mais eficiente à noite",
        wrong_4: "Contribui para o aquecimento global"
    }],
    [4, {
        question: "Qual é um exemplo de energia limpa para uso residencial?",
        image: "",
        correct: "Energia solar",
        wrong_1: "Carvão",
        wrong_2: "Lenha",
        wrong_3: "Petróleo",
        wrong_4: "Gás natural"
    }],
    [5, {
        question: "O que é verdade sobre a energia hidrelétrica?",
        image: "",
        correct: "Utiliza água para gerar eletricidade",
        wrong_1: "Não gera impacto ambiental",
        wrong_2: "É uma fonte esgotável de energia",
        wrong_3: "Depende de combustíveis fósseis",
        wrong_4: "Contribui para a erosão do solo"
    }],
    [6, {
        question: "Qual é uma desvantagem da energia nuclear?",
        image: "",
        correct: "Gera riscos de acidentes nucleares",
        wrong_1: "Não produz resíduos radioativos",
        wrong_2: "É uma fonte de energia limpa e renovável",
        wrong_3: "Contribui para a diminuição do efeito estufa",
        wrong_4: "É barata de construir e manter"
    }],
    [7, {
        question: "O que é uma forma de energia renovável para o aquecimento de água em residências?",
        image: "",
        correct: "Energia solar térmica",
        wrong_1: "Carvão",
        wrong_2: "Gás natural",
        wrong_3: "Petróleo",
        wrong_4: "Lenha"
    }],
    [8, {
        question: "Qual é uma vantagem da energia geotérmica?",
        image: "",
        correct: "É uma fonte renovável e constante",
        wrong_1: "Está disponível apenas em regiões frias",
        wrong_2: "É cara de produzir",
        wrong_3: "Causa impacto negativo na biodiversidade",
        wrong_4: "Libera gases poluentes na atmosfera"
    }],
    [9, {
        question: "O que é verdade sobre a energia das marés?",
        image: "",
        correct: "É influenciada pela lua",
        wrong_1: "Depende de combustíveis fósseis",
        wrong_2: "Não é uma fonte renovável",
        wrong_3: "Não afeta o ecossistema marinho",
        wrong_4: "Não gera eletricidade"
    }],
    [10, {
        question: "Qual é um exemplo de biomassa como fonte de energia?",
        image: "",
        correct: "Resíduos agrícolas",
        wrong_1: "Petróleo",
        wrong_2: "Carvão mineral",
        wrong_3: "Gás natural",
        wrong_4: "Urânio"
    }],
    [11, {
        question: "O que é uma característica da energia limpa gerada a partir da biomassa?",
        image: "",
        correct: "Não emite CO2",
        wrong_1: "Causa desmatamento excessivo",
        wrong_2: "Não depende de matéria orgânica",
        wrong_3: "É uma fonte esgotável",
        wrong_4: "Não gera eletricidade"
    }],
    [12, {
        question: "Qual é uma vantagem da energia solar em relação a outras fontes de energia?",
        image: "",
        correct: "Pode ser captada e utilizada em pequena escala",
        wrong_1: "É mais cara de produzir",
        wrong_2: "Dependente de combustíveis fósseis",
        wrong_3: "Disponível apenas em regiões específicas",
        wrong_4: "Contribui para a poluição do ar"
    }],
    [13, {
        question: "O que é verdade sobre a eficiência energética?",
        image: "",
        correct: "Reduz o consumo de energia sem afetar a qualidade de vida",
        wrong_1: "Consome mais recursos naturais",
        wrong_2: "Não tem impacto nas emissões de gases",
        wrong_3: "Não é viável economicamente",
        wrong_4: "Aumenta a dependência de fontes não renováveis"
    }],
    [14, {
        question: "Qual é uma forma de promover a energia limpa na sociedade?",
        image: "",
        correct: "Investir em pesquisas e infraestrutura para energias renováveis",
        wrong_1: "Utilizar mais combustíveis fósseis",
        wrong_2: "Desenvolver tecnologias poluentes",
        wrong_3: "Incentivar o uso de transportes públicos não sustentáveis",
        wrong_4: "Ignorar a importância da sustentabilidade"
    }],
]);

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

var number_of_corrects = 0;

function randomQuestion(array) {
    do {
        var question_id = Math.floor(Math.random() * 14);
    } while (array.includes(question_id));

    options_ids = ["#option-1", "#option-2", "#option-3", "#option-4", "#option-5"];

    question_ids_shuffled = shuffle(options_ids);

    question_data = quiz_map.get(question_id);

    document.querySelector(".question").textContent = question_data.question;

    document.querySelector(question_ids_shuffled[0]).textContent = question_data.correct;
    document.querySelector(question_ids_shuffled[1]).textContent = question_data.wrong_1;
    document.querySelector(question_ids_shuffled[2]).textContent = question_data.wrong_2;
    document.querySelector(question_ids_shuffled[3]).textContent = question_data.wrong_3;
    document.querySelector(question_ids_shuffled[4]).textContent = question_data.wrong_4;

    return [question_id, question_ids_shuffled[0].replace('#', '')];
}

var info = [];
function newQuestion() {
    info = randomQuestion(used_questions)
    used_questions.push(info[0]);
}

var used_questions = [];

function checkGameFinished() {
    if(used_questions.length == 7) {
        document.querySelector('.blur-effect').style.display = "block";

        var finished = document.querySelector('.finished');
        finished.style.display = "block";

        var mensagem = "";
        if(number_of_corrects == 7) {
            mensagem = "Muito bom, você acertou tudo!!!";
        }else if(number_of_corrects >= 4) {
            mensagem = "Você foi bem, mas continue tentando para conseguir a melhor nota!!!";
        }else {
            mensagem = "Você pode melhorar!!! Tente novamente";
        }

        finished.insertBefore(document.createTextNode(mensagem), document.querySelector(".back-to-menu"));

    }
}

document.addEventListener("DOMContentLoaded", function() {
    // TIMER
    var timePassed = 0
    const timer = setInterval(() => {
        timePassed = timePassed + 1;

        document.querySelector('#timer').textContent = timePassed;
    }, 1000);

    // GENERATES FIRST QUESTION
    checkGameFinished();
    newQuestion();
    
    const options = document.querySelectorAll('.option');

    options.forEach(element => {
       element.addEventListener('click', function() {
            Array.from(options).forEach(
                (el) => el.classList.remove('selected')
            );

            this.classList.add('selected');
       });
    });

    const next = document.querySelector('.go-next');

    next.addEventListener('click', function() {
        const selected_question = document.querySelector('.selected');

        if(selected_question != undefined) {
            document.querySelectorAll('.option').forEach(option => option.classList.add('disabled'));
            if(selected_question.id == info[1]) {
                selected_question.classList.add('correct');
                selected_question.classList.remove('selected');

                number_of_corrects = number_of_corrects + 1;

                document.querySelector('#number_of_correct').textContent = number_of_corrects;

                setTimeout(() => {
                    document.querySelector('.correct').classList.remove('correct');

                    checkGameFinished();
                    newQuestion();

                    document.querySelectorAll('.option').forEach(option => option.classList.remove('disabled'));
                }, 2000);
            }else {
                selected_question.classList.add('wrong')
                selected_question.classList.remove('selected')

                setTimeout(() => {
                    document.querySelector('.wrong').classList.remove('wrong');

                    checkGameFinished();
                    newQuestion();

                    document.querySelectorAll('.option').forEach(option => option.classList.remove('disabled'));
                }, 2000);         
            }
        }
    });
});