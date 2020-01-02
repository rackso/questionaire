'use strict';

var clk = void 0;

var PrepareQuestions = function PrepareQuestions() {
    $('#Questionaire .pregunta').each(function (idx, elem) {
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
    });
};

var OpenQuestion = function OpenQuestion(param) {};

var getQuestionAnswers = function getQuestionAnswers() {
    return '';
};

var CallEndTest = function CallEndTest() {
    $('#Questions, #Controls, #reloj').hide();
    alert('Fin del test');
    var ajaxOptions = {
        url: 'https://',
        data: getQuestionAnswers(),
        dataType: 'json',
        timeout: 500,
        success: function success() {},
        error: function error() {},
        complete: function complete() {},
        type: 'POST',
        async: true,
        contentType: 'application/json'
    };
    $.ajax(ajaxOptions);
};

var FinalizaTest = function FinalizaTest() {
    if (confirm('Deseas finalizar el test')) {
        clk.end();
    }
};

var StartClock = function StartClock() {
    clk = new Clock($('#reloj progress'), 9, CallEndTest);
    clk.start();
};

$(document).ready(function () {
    $('#Questions, #Controls, #reloj').hide();

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
        $('#Questions, #Controls, #reloj').show();
        StartClock();
        OpenQuestion(0);
    });
});