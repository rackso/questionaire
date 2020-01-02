'use strict';

var clk = void 0;

var PrepareQuestions = function PrepareQuestions() {
    $('#Questionaire .pregunta').each(function (idx, elem) {
        switch (elem.dataset.questionType) {
            case 'lineal':
                elem.dataset.obj = new Lineal(elem);
                break;
            case 'dnd':
                elem.dataset.obj = new Dnd(elem);
                break;
            case 'sphere':
                elem.dataset.obj = new Sphere(elem);
                break;
            case 'sort':
                elem.dataset.obj = new Sorter(elem);
                break;
            case 'fill':
                elem.dataset.obj = new Filler(elem);
                break;
            case 'single':
                elem.dataset.obj = new Singler(elem);
                break;
            case 'multiple':
                elem.dataset.obj = new Multipler(elem);
                break;
        }
    });
};

var OpenQuestion = function OpenQuestion(number) {
    var questions = $('.pregunta');
    if (number === 0 && questions.length > 0) {
        $(questions[0]).removeClass('oculta');
        return;
    }
    var current = Math.max.apply(Math, $('.pregunta').map(function (idx, elem) {
        return $(elem).hasClass('oculta') ? -1 : idx;
    }).toArray());
    current += number;
    if (current < 0) {
        current = questions.length - 1;
    }
    if (current === questions.length) {
        current = 0;
    }
    questions.removeClass('oculta').addClass('oculta');
    $(questions[current]).removeClass('oculta');
};

var getQuestionAnswers = function getQuestionAnswers() {
    return '';
};

var CallEndTest = function CallEndTest() {
    return;
    /*
    $('#Questionaire, #Controls, #reloj').hide()
    alert('Fin del test')
    const ajaxOptions = {
        url: 'https://',
        data: getQuestionAnswers(),
        dataType: 'json',
        timeout: 500,
        success: () => {},
        error: () => {},
        complete: () => {
            $('#valresultado').html('12')
            $('#Resultado').show()
            // Destroy all question elems
        },
        type: 'GET',
        async: true,
        contentType: 'application/json'
    }
    $.ajax(ajaxOptions)
    */
};

var FinalizaTest = function FinalizaTest() {
    if (confirm('Deseas finalizar el test')) {
        clk.end();
    }
};

var StartClock = function StartClock() {
    clk = new Clock($('#reloj progress'), 2, CallEndTest);
    clk.start();
};

$(document).ready(function () {
    $('#Questionaire, #Controls, #reloj, #Resultado').hide();

    $('.ctrl-atras').click(function () {
        OpenQuestion(-1);
    });
    $('.ctrl-alante').click(function () {
        OpenQuestion(1);
    });
    $('.ctrl-fin').click(CallEndTest);

    $('#start').click(function () {
        PrepareQuestions();
        $('#Presentacion').hide();
        $('#Questionaire, #Controls, #reloj').show();
        StartClock();
        OpenQuestion(0);
    });
});