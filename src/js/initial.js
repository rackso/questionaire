const PrepareQuestions = () => {
    $('#Questionaire .pregunta').each((idx, elem) => {
        switch (elem.dataset.questionType) {
            case 'lineal':
                break;
            case 'dnd':
                break;
            case 'sphere':
                break;
            case 'single':
                break;
            case 'multiple':
                break;
            case 'sort':
                break;
            case 'fill':
                break;
        }
    })
}

const OpenQuestion = (param) => {

}

const FinalizaTest = () => {

}

const StartClock = () => {
    const clk = new Clock($('#reloj progress'))
    clk.start()
    return clk
}

$(document).ready(() => {
    let clk;

    $('#Questions, .pregunta, #Controls, #reloj').hide();

    $('.ctrl-atras').click(() => { OpenQuestion(-1); })
    $('.ctrl-alante').click(() => { OpenQuestion(1); })
    $('.ctrl-fin').click(FinalizaTest)

    $('#start').click(() => {
        PrepareQuestions();
        $('#Presentacion').hide();
        $('#Questions, #Controls, #reloj').show();
        clk = StartClock();
        OpenQuestion(0);
    })

})