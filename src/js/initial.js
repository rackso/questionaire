let clk;

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

const getQuestionAnswers = () => {
    return ''
}

const CallEndTest = () => {
    $('#Questions, #Controls, #reloj').hide()
    alert('Fin del test')
    const ajaxOptions = {
        url: 'https://',
        data: getQuestionAnswers(),
        dataType: 'json',
        timeout: 500,
        success: () => {},
        error: () => {},
        complete: () => {},
        type: 'POST',
        async: true,
        contentType: 'application/json'
    }
    $.ajax(ajaxOptions)
}

const FinalizaTest = () => {
    if (confirm('Deseas finalizar el test')) { clk.end() }
}

const StartClock = () => {
    clk = new Clock($('#reloj progress'), 9, CallEndTest)
    clk.start()
}

$(document).ready(() => {
    $('#Questions, #Controls, #reloj').hide()

    $('.ctrl-atras').click(() => { OpenQuestion(-1); })
    $('.ctrl-alante').click(() => { OpenQuestion(1); })
    $('.ctrl-fin').click(CallEndTest)

    $('#start').click(() => {
        PrepareQuestions()
        $('#Presentacion').hide()
        $('#Questions, #Controls, #reloj').show()
        StartClock()
        OpenQuestion(0)
    })

})