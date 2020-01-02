'use strict';

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

var FinalizaTest = function FinalizaTest() {};

var StartClock = function StartClock() {
    var clk = new Clock($('#reloj progress'));
    clk.start();
    return clk;
};

$(document).ready(function () {
    var clk = void 0;

    $('#Questions, .pregunta, #Controls, #reloj').hide();

    $('.ctrl-atras').click(function () {
        OpenQuestion(-1);
    });
    $('.ctrl-alante').click(function () {
        OpenQuestion(1);
    });
    $('.ctrl-fin').click(FinalizaTest);

    $('#start').click(function () {
        PrepareQuestions();
        $('#Presentacion').hide();
        $('#Questions, #Controls, #reloj').show();
        clk = StartClock();
        OpenQuestion(0);
    });
});