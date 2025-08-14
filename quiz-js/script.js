let currentQuestion = 0;
let correctAswers = 0;

document.querySelector('.scoreArea button').addEventListener('click', reset);

showQuestion();

function showQuestion() {
    if (questions[currentQuestion]) {
        let quest = questions[currentQuestion];

        let porcentagem = Math.floor(currentQuestion / questions.length * 100);

        document.querySelector('.progress--bar').style.width = `${porcentagem}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = quest.question;

        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';

        for (let i in quest.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${quest.options[i]}</div>`;
        }

        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })
    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer === clickedOption) {
        correctAswers++;
    }


    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let correctAswersPct = Math.floor(correctAswers / questions.length * 100);

    document.querySelector('.scorePct').innerHTML = `Acertou ${correctAswersPct}%`;
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAswers}.`;

    if(correctAswersPct < 30){
        document.querySelector('.scoreText1').innerHTML = 'Tá ruim hein';
        document.querySelector('.scorePct').style.color = 'red';
    } else if (correctAswersPct >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabéns';
        document.querySelector('.scorePct').style.color = 'green';
    } else {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom';
        document.querySelector('.scorePct').style.color = 'yellow';
    }

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = `100%`;
}

function reset(){
    correctAswers = 0;
    currentQuestion = 0;

    showQuestion();
}